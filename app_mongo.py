
from flask import Flask, jsonify, request, send_from_directory
from pymongo import MongoClient
from datetime import datetime, timezone
from pathlib import Path
import math

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent

# Connect to MongoDB
client = MongoClient(
    "mongodb://localhost:27017/",
    serverSelectionTimeoutMS=5000
)

db = client["myshopDB"]

# Collections
products = db["products"]
orders = db["orders"]

# Create indexes
products.create_index("name", unique=True)
orders.create_index("created_at")


@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")

@app.route("/<path:filename>")
def static_files(filename):
    return send_from_directory(BASE_DIR, filename)


@app.route("/api/health")
def health():
    try:
        client.admin.command("ping")
        return jsonify({
            "status": "success",
            "message": "MyShop MongoDB backend is running!"
        })
    except Exception as error:
        return jsonify({
            "status": "error",
            "message": str(error)
        }), 500


# GET ALL PRODUCTS
@app.route("/api/products", methods=["GET"])
def get_products():
    result = []

    for product in products.find().sort("_id", 1):
        product["_id"] = str(product["_id"])
        result.append(product)

    return jsonify(result)


# IMPORT PRODUCTS FROM WEBSITE
@app.route("/api/products/import", methods=["POST"])
def import_products():
    data = request.get_json(silent=True)

    if not isinstance(data, list):
        return jsonify({
            "status": "error",
            "message": "Expected a list of products."
        }), 400

    saved = 0

    for product in data:
        if not isinstance(product, dict):
            continue

        name = product.get("name")
        image = product.get("image", "")

        if not name or not image:
            continue

        try:
            price = float(product.get("price"))
            rating = float(product.get("rating", 0))
            stock_value = product.get("stock", True)

            if not math.isfinite(price) or price < 0:
                continue

            if not math.isfinite(rating):
                continue

            if isinstance(stock_value, bool):
                stock = 1 if stock_value else 0
            else:
                stock = int(stock_value)

            if stock < 0:
                continue

        except (TypeError, ValueError):
            continue

        product_data = {
            "name": name,
            "brand": product.get("brand", ""),
            "price": price,
            "category": product.get("category", ""),
            "rating": rating,
            "image": image,
            "description": product.get("description", "")
        }

        products.update_one(
            {"name": name},
            {
                "$set": product_data,
                "$setOnInsert": {"stock": stock} 
            },
       
            upsert=True
        )

        saved += 1

    return jsonify({
        "status": "success",
        "message": "Products saved to MongoDB.",
        "received": len(data),
        "saved": saved
    })


# CREATE ORDER
@app.route("/api/orders", methods=["POST"])
# CREATE ORDER
@app.route("/api/orders", methods=["POST"])
def create_order():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({
            "status": "error",
            "message": "Invalid order data."
        }), 400

    customer_name = data.get("customer_name")
    address = data.get("address")
    city = data.get("city")
    pincode = str(data.get("pincode", ""))
    payment_method = data.get("payment_method")
    items = data.get("items")

    if not all([customer_name, address, city, pincode, payment_method]):
        return jsonify({
            "status": "error",
            "message": "Please provide all customer details."
        }), 400

    if not pincode.isdigit() or len(pincode) != 6:
        return jsonify({
            "status": "error",
            "message": "Invalid 6-digit pincode."
        }), 400

    if not isinstance(items, list) or not items:
        return jsonify({
            "status": "error",
            "message": "Your order has no products."
        }), 400

    # Combine duplicate products
    quantities = {}

    for item in items:
        if not isinstance(item, dict):
            return jsonify({
                "status": "error",
                "message": "Invalid product in order."
            }), 400

        name = item.get("name")

        try:
            quantity = int(item.get("quantity", 0))
        except (TypeError, ValueError):
            return jsonify({
                "status": "error",
                "message": "Invalid quantity."
            }), 400

        if not name or quantity <= 0:
            return jsonify({
                "status": "error",
                "message": "Invalid product or quantity."
            }), 400

        quantities[name] = quantities.get(name, 0) + quantity

    order_items = []
    total = 0

    # Check products and calculate total
    for name, quantity in quantities.items():
        product = products.find_one({"name": name})

        if product is None:
            return jsonify({
                "status": "error",
                "message": f"Product not found: {name}"
            }), 400

        price = float(product["price"])
        total += price * quantity

        order_items.append({
            "product_name": name,
            "quantity": quantity,
            "price": price
        })

    # Reserve stock
    reserved_items = []

    for item in order_items:
        result = products.update_one(
            {
                "name": item["product_name"],
                "stock": {"$gte": item["quantity"]}
            },
            {
                "$inc": {"stock": -item["quantity"]}
            }
        )

        if result.modified_count == 0:
            for reserved in reserved_items:
                products.update_one(
                    {"name": reserved["product_name"]},
                    {"$inc": {"stock": reserved["quantity"]}}
                )

            return jsonify({
                "status": "error",
                "message": f"Not enough stock for {item['product_name']}"
            }), 400

        reserved_items.append(item)

    # Save order
    order = {
        "customer_name": customer_name,
        "address": address,
        "city": city,
        "pincode": pincode,
        "total": round(total, 2),
        "payment_method": payment_method,
        "status": "Placed",
        "items": order_items,
        "created_at": datetime.now(timezone.utc)
    }

    try:
        result = orders.insert_one(order)

    except Exception:
        for reserved in reserved_items:
            products.update_one(
                {"name": reserved["product_name"]},
                {"$inc": {"stock": reserved["quantity"]}}
            )

        app.logger.exception("Order could not be saved.")

        return jsonify({
            "status": "error",
            "message": "Order could not be saved. Please try again."
        }), 500

    return jsonify({
        "status": "success",
        "message": "Order placed successfully.",
        "order_id": str(result.inserted_id),
        "total": round(total, 2)
    }), 201

# GET ALL ORDERS
@app.route("/api/orders", methods=["GET"])
def get_orders():
    result = []

    for order in orders.find().sort("created_at", -1):
        order["_id"] = str(order["_id"])
        result.append(order)

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
