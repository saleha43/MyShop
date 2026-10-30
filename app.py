
from flask import Flask, jsonify, request, send_from_directory
import sqlite3
from pathlib import Path

app = Flask(__name__)

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "myshop.db"


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL UNIQUE,
                brand TEXT DEFAULT '',
                price REAL NOT NULL,
                category TEXT DEFAULT '',
                rating REAL DEFAULT 0,
                stock INTEGER DEFAULT 1,
                image TEXT,
                description TEXT DEFAULT ''
            )
        """)

        # Add missing columns if an older products table exists
        columns = {
            row["name"]
            for row in conn.execute("PRAGMA table_info(products)")
        }

        additions = {
            "brand": "TEXT DEFAULT ''",
            "rating": "REAL DEFAULT 0",
            "description": "TEXT DEFAULT ''",
        }

        for column, definition in additions.items():
            if column not in columns:
                conn.execute(
                    f"ALTER TABLE products ADD COLUMN {column} {definition}"
                )

        conn.execute("""
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                customer_name TEXT NOT NULL,
                address TEXT NOT NULL,
                city TEXT NOT NULL,
                pincode TEXT NOT NULL,
                total REAL NOT NULL,
                payment_method TEXT NOT NULL,
                status TEXT DEFAULT 'Placed',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)

        conn.execute("""
            CREATE TABLE IF NOT EXISTS order_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                order_id INTEGER NOT NULL,
                product_name TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                price REAL NOT NULL,
                FOREIGN KEY (order_id) REFERENCES orders(id)
            )
        """)


@app.route("/")
def home():
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/api/health")
def health():
    return jsonify({
        "status": "success",
        "message": "MyShop backend is running!"
    })


@app.route("/api/products", methods=["GET"])
def get_products():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM products ORDER BY id"
        ).fetchall()

    return jsonify([dict(row) for row in rows])


@app.route("/api/products/import", methods=["POST"])
def import_products():
    data = request.get_json(silent=True)

    if not isinstance(data, list):
        return jsonify({
            "status": "error",
            "message": "Expected a list of products."
        }), 400

    with get_db() as conn:
        for product in data:
            if not isinstance(product, dict):
                continue

            name = product.get("name")
            price = product.get("price")
            image = product.get("image", "")

            if not name or price is None or not image:
                continue

            try:
                price = float(price)
                rating = float(product.get("rating", 0))
            except (TypeError, ValueError):
                continue

            if price < 0:
                continue

            stock_value = product.get("stock", True)
            stock = 1 if stock_value is True else (
                0 if stock_value is False else int(stock_value)
            )
            
            existing = conn.execute(
                "SELECT id FROM products WHERE name = ?",
                (name,)
            ).fetchone()

            product_values = (
                product.get("brand", ""),
                price,
                product.get("category", ""),
                rating,
                stock,
                image,
                product.get("description", "")
            )

            if existing:
                conn.execute("""
                    UPDATE products
                    SET brand = ?, price = ?, category = ?,
                        rating = ?, stock = ?, image = ?, description = ?
                    WHERE name = ?
                """, product_values + (name,))
            else:
                conn.execute("""
                    INSERT INTO products
                        (name, brand, price, category, rating,
                         stock, image, description)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """, (name,) + product_values)


    return jsonify({
        "status": "success",
        "message": "Products saved to database.",
        "received": len(data)
    })


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

    if not isinstance(items, list) or not items:
        return jsonify({
            "status": "error",
            "message": "Your order has no products."
        }), 400

    try:
        with get_db() as conn:
            order_items = []
            total = 0

            for item in items:
                if not isinstance(item, dict):
                    return jsonify({
                        "status": "error",
                        "message": "Invalid product in order."
                    }), 400

                name = item.get("name")
                quantity = int(item.get("quantity", 0))

                if not name or quantity <= 0:
                    return jsonify({
                        "status": "error",
                        "message": "Invalid product or quantity."
                    }), 400

                product = conn.execute(
                    "SELECT name, price, stock FROM products WHERE name = ?",
                    (name,)
                ).fetchone()

                if product is None:
                    return jsonify({
                        "status": "error",
                        "message": f"Product not found: {name}"
                    }), 400

                if product["stock"] <= 0:
                    return jsonify({
                        "status": "error",
                        "message": f"Product is out of stock: {name}"
                    }), 400

                price = float(product["price"])
                total += price * quantity
                order_items.append((product["name"], quantity, price))

            cursor = conn.execute("""
                INSERT INTO orders
                    (customer_name, address, city, pincode,
                     total, payment_method, status)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, (
                customer_name,
                address,
                city,
                pincode,
                total,
                payment_method,
                "Placed"
            ))

            order_id = cursor.lastrowid

            for name, quantity, price in order_items:
                conn.execute("""
                    INSERT INTO order_items
                        (order_id, product_name, quantity, price)
                    VALUES (?, ?, ?, ?)
                """, (order_id, name, quantity, price))

        return jsonify({
            "status": "success",
            "message": "Order placed successfully.",
            "order_id": order_id,
            "total": round(total, 2)
        }), 201

    except (TypeError, ValueError):
        return jsonify({
            "status": "error",
            "message": "Invalid quantity or order data."
        }), 400

@app.route("/<path:filename>")
def existing_files(filename):
    return send_from_directory(BASE_DIR, filename)


init_db()

if __name__ == "__main__":
    app.run(debug=True)
