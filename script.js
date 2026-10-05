// ================= PRODUCT DATA =================

let productsData = [
    {
        name: "Smartphone",
        price: 14999,
        category: "Mobiles",
        rating: 4.5,
        stock: true
    },

    {
        name: "Headphones",
        price: 1599,
        category: "Electronics",
        rating: 4.3,
        stock: true
    },

    {
        name: "Shoes",
        price: 999,
        category: "Fashion",
        rating: 4.2,
        stock: false
    }
];
// ================= DISPLAY PRODUCTS =================

function displayProducts() {

    let container = document.getElementById("product-container");

    container.innerHTML = "";

    productsData.forEach(function(product) {

        let card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>

            <p>₹${product.price.toLocaleString("en-IN")}</p>

            <p class="stock">
                ${product.stock ? "In Stock" : "Out of Stock"}
            </p>

            <p>⭐ ${product.rating}/5</p>

            <p>${product.category}</p>

            <button class="add-cart">
                Add to Cart
            </button>
        `;

        container.appendChild(card);

    });
}
// ================= CART DATA =================

let cart = JSON.parse(localStorage.getItem("myCart")) || [];


// ================= CART BUTTON =================

let cartButton = document.getElementById("cart-btn");

let cartBox = document.getElementById("cart-box");


// ================= ADD TO CART BUTTONS =================

let addButtons = document.querySelectorAll(".add-cart");


addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get product card
        let product = button.parentElement;
        let stock = product.querySelector(".stock");

        if (stock.classList.contains("out-of-stock")) {
            alert("Sorry, this product is out of stock.");
            return;
        }


        // Get product name
        let productName =
            product.querySelector("h3").innerText;


        // Get product price
        let productPrice =
            product.querySelector("p").innerText;


        // Check if product already exists
        let existingProduct = cart.find(function(item) {

            return item.name === productName;

        });


        // If product already exists
        if (existingProduct) {

            existingProduct.quantity++;

        }

        // If product is new
        else {

            cart.push({

                name: productName,

                price: productPrice,

                quantity: 1

            });

        }


        // Update cart
        showCart();

    });

});


// ================= SHOW CART =================

function showCart() {

    let cartItems =
        document.getElementById("cart-items");


    let cartTotal =
        document.getElementById("cart-total");


    // Empty old cart display
    cartItems.innerHTML = "";


    // Total starts from zero
    let total = 0;
    localStorage.setItem("myCart", JSON.stringify(cart));


    // Show every product
    cart.forEach(function(item, index) {


        // Convert price to number
        let priceNumber = Number(

            item.price
                .replace("₹", "")
                .replace(",", "")

        );


        // Calculate subtotal
        let subtotal =
            priceNumber * item.quantity;


        // Add to total
        total = total + subtotal;


        // Create cart item
        let itemElement =
            document.createElement("div");


        itemElement.innerHTML = `

            <p>
                ${item.name}
                - ₹${subtotal.toLocaleString("en-IN")}
            </p>

            <button onclick="decreaseQuantity(${index})">
                -
            </button>

            <span>
                ${item.quantity}
            </span>

            <button onclick="increaseQuantity(${index})">
                +
            </button>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>

            <hr>

        `;


        // Add item to cart box
        cartItems.appendChild(itemElement);

    });


    // Show total
    cartTotal.innerText =
        "Total: ₹" + total.toLocaleString("en-IN");


    // Update cart count
    let totalQuantity = 0;


    cart.forEach(function(item) {

        totalQuantity =
            totalQuantity + item.quantity;

    });


    cartButton.innerText =
        "Cart (" + totalQuantity + ")";

}


// ================= INCREASE QUANTITY =================

function increaseQuantity(index) {

    cart[index].quantity++;

    showCart();

}


// ================= DECREASE QUANTITY =================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    showCart();

}


// ================= REMOVE PRODUCT =================

function removeFromCart(index) {

    cart.splice(index, 1);

    showCart();

}


// ================= OPEN / CLOSE CART =================

cartButton.addEventListener("click", function() {

    if (cartBox.style.display === "block") {

        cartBox.style.display = "none";

    }

    else {

        cartBox.style.display = "block";

    }

});


// ================= SEARCH =================

let searchBox =
    document.getElementById("search-box");


let products =
    document.querySelectorAll(".product-card");


searchBox.addEventListener("input", function() {

    let searchText =
        searchBox.value.toLowerCase();

    let found = false;

    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").innerText.toLowerCase();

        let productCategory =
            product.querySelectorAll("p")[2].innerText.toLowerCase();

        if (
            productName.includes(searchText) ||
            productCategory.includes(searchText)
        ) {

            product.style.display = "block";
            found = true;

        } else {

            product.style.display = "none";

        }

    });


    let noProducts =
        document.getElementById("no-products");

    if (found) {
        noProducts.style.display = "none";
    } else {
        noProducts.style.display = "block";
    }

});

function openProduct(productName) {

    let details = document.getElementById("product-details");

    let name = document.getElementById("detail-name");
    let price = document.getElementById("detail-price");
    let rating = document.getElementById("detail-rating");
    let category = document.getElementById("detail-category");
    let stock = document.getElementById("detail-stock");
    let description = document.getElementById("detail-description");

    let detailCartButton =
        document.getElementById("detail-cart");


    // ================= SHOES =================

    if (productName === "Shoes") {

        name.innerText = "Shoes";
        price.innerText = "₹999";
        rating.innerText = "⭐ 4.2/5";
        category.innerText = "Category: Fashion";

        description.innerText =
            "Comfortable and stylish shoes for daily use.";

        stock.innerText = "Out of Stock";
        stock.style.color = "red";

        detailCartButton.disabled = true;
        detailCartButton.innerText = "Out of Stock";
    }


    // ================= SMARTPHONE =================

    if (productName === "Smartphone") {

        name.innerText = "Smartphone";
        price.innerText = "₹14,999";
        rating.innerText = "⭐ 4.5/5";
        category.innerText = "Category: Electronics";

        description.innerText =
            "Powerful smartphone with a stylish design and great performance.";

        stock.innerText = "In Stock";
        stock.style.color = "green";

        detailCartButton.disabled = false;
        detailCartButton.innerText = "Add to Cart";
    }


    // ================= HEADPHONES =================

    if (productName === "Headphones") {

        name.innerText = "Headphones";
        price.innerText = "₹1,599";
        rating.innerText = "⭐ 4.3/5";
        category.innerText = "Category: Electronics";

        description.innerText =
            "Wireless headphones with clear sound and comfortable design.";

        stock.innerText = "In Stock";
        stock.style.color = "green";

        detailCartButton.disabled = false;
        detailCartButton.innerText = "Add to Cart";
    }


    // Show product details
    details.style.display = "block";


    // ================= DETAIL ADD TO CART =================

    detailCartButton.onclick = function() {

        let existingProduct = cart.find(function(item) {

            return item.name === productName;

        });


        if (existingProduct) {

            existingProduct.quantity++;

        }

        else {

            let productPrice;

            if (productName === "Smartphone") {

                productPrice = "₹14,999";

            }

            else if (productName === "Headphones") {

                productPrice = "₹1,599";

            }

            else if (productName === "Shoes") {

                productPrice = "₹999";

            }


            cart.push({

                name: productName,
                price: productPrice,
                quantity: 1

            });

        }


        showCart();

    };

}


// ================= CLOSE PRODUCT DETAILS =================

document.getElementById("close-details").onclick = function() {

    document.getElementById("product-details").style.display = "none";

};


// ================= CATEGORY FILTER =================

let mobileBtn = document.getElementById("mobiles-btn");
let fashionBtn = document.getElementById("fashion-btn");
let electronicsBtn = document.getElementById("electronics-btn");
let beautyBtn = document.getElementById("beauty-btn");
let homeBtn = document.getElementById("home-btn");
let allBtn = document.getElementById("all-btn");

function filterProducts(category) {

    products.forEach(function(product) {

        let productCategory =
            product.querySelectorAll("p")[2].innerText;

        if (category === "All" ||
            productCategory === category) {

            product.style.display = "block";

        } else {

            product.style.display = "none";
        }

    });
}


mobileBtn.onclick = function() {
    filterProducts("Mobiles");
};

fashionBtn.onclick = function() {
    filterProducts("Fashion");
};

electronicsBtn.onclick = function() {
    filterProducts("Electronics");
};

beautyBtn.onclick = function() {
    filterProducts("Beauty");
};

homeBtn.onclick = function() {
    filterProducts("Home");
};

allBtn.onclick = function() {
    filterProducts("All");
};
// ================= LOGIN =================

let loginButton =
    document.getElementById("login-btn");

let loginBox =
    document.getElementById("login-box");

let closeLogin =
    document.getElementById("close-login");

let submitLogin =
    document.getElementById("submit-login");


loginButton.onclick = function() {

    loginBox.style.display = "block";

};


closeLogin.onclick = function() {

    loginBox.style.display = "none";

};


submitLogin.onclick = function() {

    let username =
        document.getElementById("username").value;

    let email =
        document.getElementById("email").value;


    // Check name
    if (username === "") {

        alert("Please enter your name");

        return;
    }


    // Check email
    if (email === "") {

        alert("Please enter your email");

        return;
    }


    // Save user information
    let user = {

        name: username,
        email: email

    };


    localStorage.setItem(
        "myUser",
        JSON.stringify(user)
    );


    // Change login button
    loginButton.innerText =
        "Hi, " + username;


    // Close login popup
    loginBox.style.display = "none";

};
// ================= BUY NOW =================
function buyNow(productName) {

    let productCards = document.querySelectorAll(".product-card");

    for (let card of productCards) {

        let name = card.querySelector("h3").innerText;

        if (name === productName) {

            let stock = card.querySelector(".stock");

            if (stock.classList.contains("out-of-stock")) {
                alert("Sorry, this product is out of stock.");
                return;
            }

        }
    }



    let product = cart.find(function(item) {
        return item.name === productName;
    });

    if (!product) {

        let productPrice;

        if (productName === "Smartphone") {
            productPrice = "₹14,999";
        }
        else if (productName === "Headphones") {
            productPrice = "₹1,599";
        }
        else {
            productPrice = "₹999";
        }

        product = {
            name: productName,
            price: productPrice,
            quantity: 1
        };

        cart.push(product);
    }

    showCheckout();

}


// ================= CLOSE CHECKOUT =================

document.getElementById("close-checkout").onclick = function() {

    document.getElementById("checkout-page").style.display = "none";

};
// ================= ORDER HISTORY =================

let orders =
    JSON.parse(localStorage.getItem("myOrders")) || [];

let ordersButton =
    document.getElementById("orders-btn");

let ordersBox =
    document.getElementById("orders-box");

let closeOrders =
    document.getElementById("close-orders");


// ================= SHOW ORDERS =================

function showOrders() {

    let orderList =
        document.getElementById("order-list");

    orderList.innerHTML = "";


    if (orders.length === 0) {

        orderList.innerHTML =
            "<p>No orders yet.</p>";

        return;
    }


    orders.forEach(function(order, index) {

        let orderElement =
            document.createElement("div");


        orderElement.innerHTML = `

            <h3>Order #${index + 1}</h3>

            <p>
                Product: ${order.product}
            </p>

            <p>
                Quantity: ${order.quantity}
            </p>

            <p>
                Total: ${order.total}
            </p>

            <p>
                Payment: ${order.payment}
            </p>

            <hr>

        `;


        orderList.appendChild(orderElement);

    });

}


// ================= OPEN ORDERS =================

ordersButton.onclick = function() {

    showOrders();

    ordersBox.style.display = "block";

};


// ================= CLOSE ORDERS =================

closeOrders.onclick = function() {

    ordersBox.style.display = "none";

};

// ================= PLACE ORDER =================

let placeOrderButton =
    document.getElementById("place-order");


placeOrderButton.onclick = function() {

    let address =
        document.getElementById("address").value;

    let city =
        document.getElementById("city").value;

    let pincode =
        document.getElementById("pincode").value;


    // Check empty fields
    if (
        address === "" ||
        city === "" ||
        pincode === ""
    ) {

        alert("Please fill all delivery details.");

        return;
    }


    // Check pincode
    if (!/^[0-9]{6}$/.test(pincode)) {

        alert("Please enter a valid 6-digit pincode.");

        return;
    }


    // ================= PAYMENT METHOD =================

    let paymentMethod =
        document.getElementById("payment-method").value;

    let paymentText = "";

    if (paymentMethod === "cod") {

        paymentText = "Cash on Delivery";

    }
    else if (paymentMethod === "upi") {

        paymentText = "UPI";

    }
    else {

        paymentText = "Card";

    }


    // Show payment method
    document.getElementById("selected-payment").innerText =
        "Payment Method: " + paymentText;


    // ================= CALCULATE TOTAL =================

    let orderTotal = 0;

    cart.forEach(function(item) {

        let priceNumber =
            Number(
                item.price
                    .replace("₹", "")
                    .replace(",", "")
            );

        orderTotal =
            orderTotal +
            (priceNumber * item.quantity);

    });


    // ================= SAVE ORDER =================

    orders.push({

        product: cart.map(function(item) {

            return item.name + " × " + item.quantity;

        }).join(", "),

        quantity: cart.reduce(function(total, item) {

            return total + item.quantity;

        }, 0),

        total:
            "₹" + orderTotal.toLocaleString("en-IN"),

        payment: paymentText

    });


    // Save orders in LocalStorage
    localStorage.setItem(
        "myOrders",
        JSON.stringify(orders)
    );


    // ================= CLEAR CART =================

    cart = [];

    localStorage.removeItem("myCart");

    showCart();


    // ================= SHOW SUCCESS =================

    document.getElementById("order-success").style.display =
        "block";

    document.getElementById("order-success").scrollIntoView();

};


// ================= CONTINUE SHOPPING =================

document.getElementById("continue-shopping").onclick = function() {

    document.getElementById("order-success").style.display = "none";

    document.getElementById("checkout-page").style.display = "none";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
// ================= CART CHECKOUT =================

let checkoutButton =
    document.getElementById("checkout-btn");

checkoutButton.onclick = function() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    showCheckout();

};
// ================= SHOW CHECKOUT =================

function showCheckout() {

    let summaryItems =
        document.getElementById("summary-items");

    let summaryTotal =
        document.getElementById("summary-total");

    summaryItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {

        let priceNumber = Number(
            item.price
                .replace("₹", "")
                .replace(",", "")
        );

        let subtotal =
            priceNumber * item.quantity;

        total = total + subtotal;

        let itemElement =
            document.createElement("p");

        itemElement.innerText =
            item.name +
            " × " +
            item.quantity +
            " = ₹" +
            subtotal.toLocaleString("en-IN");

        summaryItems.appendChild(itemElement);

    });

    summaryTotal.innerText =
        "Total: ₹" +
        total.toLocaleString("en-IN");


    document.getElementById("checkout-page").style.display =
        "block";

    document.getElementById("cart-box").style.display =
        "none";

}
showCart();
let clearCartButton =
    document.getElementById("clear-cart-btn");

clearCartButton.onclick = function() {

    cart = [];

    localStorage.removeItem("myCart");

    showCart();

    alert("Cart cleared!");

};
console.log("JavaScript is working");
// ================= WISHLIST =================

let wishlist = JSON.parse(localStorage.getItem("myWishlist")) || [];

function addToWishlist(productName) {

    // Check if product already exists
    let existingProduct = wishlist.find(function(item) {
        return item === productName;
    });

    if (existingProduct) {
        alert("Product is already in your wishlist ❤️");
        return;
    }

    // Add product
    wishlist.push(productName);

    // Save wishlist
    localStorage.setItem(
        "myWishlist",
        JSON.stringify(wishlist)
    );

    alert(productName + " added to wishlist ❤️");
}
// ================= WISHLIST DISPLAY =================

let wishlistButton =
    document.getElementById("wishlist-btn");

let wishlistBox =
    document.getElementById("wishlist-box");

let closeWishlist =
    document.getElementById("close-wishlist");


function showWishlist() {

    let wishlistItems =
        document.getElementById("wishlist-items");

    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {

        wishlistItems.innerHTML =
            "<p>Your wishlist is empty.</p>";

    } else {

        wishlist.forEach(function(productName, index) {

            let item = document.createElement("div");

            item.innerHTML = `
                <p>${productName}</p>
                <button onclick="addWishlistToCart('${productName}')">
                    Add to Cart
                </button>

                <button onclick="removeFromWishlist(${index})">
                    Remove
                </button>
                <hr>
            `;

            wishlistItems.appendChild(item);

        });
    }


    wishlistButton.innerText =
        "❤️ Wishlist (" + wishlist.length + ")";
}


// Open wishlist
wishlistButton.onclick = function() {

    showWishlist();

    wishlistBox.style.display = "block";

};


// Close wishlist
closeWishlist.onclick = function() {

    wishlistBox.style.display = "none";

};


// Remove from wishlist
function removeFromWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem(
        "myWishlist",
        JSON.stringify(wishlist)
    );

    showWishlist();

};


// Show correct wishlist count after refresh
showWishlist();
// Add wishlist product to cart
function addWishlistToCart(productName) {

    let productPrice;

    if (productName === "Smartphone") {
        productPrice = "₹14,999";
    }

    else if (productName === "Headphones") {
        productPrice = "₹1,599";
    }

    else if (productName === "Shoes") {
        productPrice = "₹999";
    }


    let existingProduct = cart.find(function(item) {
        return item.name === productName;
    });


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });

    }


    showCart();

    alert(productName + " added to cart 🛒");
}
// ================= LOAD SAVED USER =================

let savedUser =
    JSON.parse(localStorage.getItem("myUser"));

if (savedUser) {

    loginButton.innerText =
        "Hi, " + savedUser.name;

}
