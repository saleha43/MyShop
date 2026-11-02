// ================= PRODUCT DATA =================

let productsData = [

    // ---------- MOBILES ----------

    {
        name: "Samsung Galaxy S25",
        brand: "Samsung",
        price: 84999,
        category: "Mobiles",
        rating: 4.7,
        stock: true,
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Samsung_Galaxy_S25%2B.jpg",
        description: "Powerful Samsung smartphone with premium design."
    },

    {
        name: "iPhone 16",
        brand: "Apple",
        price: 69999,
        category: "Mobiles",
        rating: 4.8,
        stock: true,
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Back_of_iPhone_16.jpg?width=500",
        description: "Premium Apple smartphone with excellent performance."
    },

    {
        name: "OnePlus 13",
        brand: "OnePlus",
        price: 64999,
        category: "Mobiles",
        rating: 4.6,
        stock: true,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
        description: "Fast and powerful OnePlus smartphone."
    },

    {
        name: "Redmi Note 14 Pro",
        brand: "Xiaomi",
        price: 27999,
        category: "Mobiles",
        rating: 4.5,
        stock: true,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
        description: "Feature-packed smartphone with a stylish design."
    },

    {
        name: "Realme GT 7",
        brand: "Realme",
        price: 39999,
        category: "Mobiles",
        rating: 4.4,
        stock: true,
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=500&q=80",
        description: "High-performance smartphone for everyday use."
    },


    // ---------- LAPTOPS ----------

    {
        name: "HP Pavilion 15",
        brand: "HP",
        price: 62999,
        category: "Laptops",
        rating: 4.4,
        stock: true,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
        description: "Reliable laptop for students and professionals."
    },

    {
        name: "Dell Inspiron 15",
        brand: "Dell",
        price: 58999,
        category: "Laptops",
        rating: 4.3,
        stock: true,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80",
        description: "Powerful and reliable laptop for everyday tasks."
    },


    // ---------- ELECTRONICS ----------

    {
        name: "Sony WH-1000XM5",
        brand: "Sony",
        price: 29999,
        category: "Electronics",
        rating: 4.7,
        stock: true,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
        description: "Premium wireless headphones with noise cancellation."
    },

    {
        name: "JBL Bluetooth Speaker",
        brand: "JBL",
        price: 4999,
        category: "Electronics",
        rating: 4.5,
        stock: true,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
        description: "Portable speaker with powerful sound."
    },
    // ---------- FASHION ----------

{
    name: "Men's Casual Shirt",
    brand: "Roadster",
    price: 1499,
    category: "Fashion",
    rating: 4.3,
    stock: true,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable casual shirt for everyday wear."
},

{
    name: "Women's Summer Dress",
    brand: "H&M",
    price: 1999,
    category: "Fashion",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
    description: "Stylish and comfortable summer dress."
},

{
    name: "Men's Hoodie",
    brand: "Puma",
    price: 2499,
    category: "Fashion",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
    description: "Warm and comfortable hoodie for casual wear."
},

// ---------- FOOTWEAR ----------

{
    name: "Air Max Sneakers",
    brand: "Nike",
    price: 8999,
    category: "Footwear",
    rating: 4.6,
    stock: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable and stylish Nike sneakers."
},

{
    name: "Running Shoes",
    brand: "Adidas",
    price: 4999,
    category: "Footwear",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80",
    description: "Lightweight running shoes for everyday workouts."
},

// ---------- BEAUTY ----------

{
    name: "Face Moisturizer",
    brand: "Nivea",
    price: 499,
    category: "Beauty",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=500&q=80",
    description: "Daily moisturizer for soft and hydrated skin."
},

{
    name: "Matte Lipstick",
    brand: "Maybelline",
    price: 699,
    category: "Beauty",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=500&q=80",
    description: "Long-lasting matte lipstick with rich color."
},

// ---------- HOME ----------

{
    name: "Modern Table Lamp",
    brand: "Philips",
    price: 1299,
    category: "Home",
    rating: 4.3,
    stock: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80",
    description: "Modern table lamp for bedroom and study table."
},

{
    name: "Ceramic Coffee Mug",
    brand: "Milton",
    price: 399,
    category: "Home",
    rating: 4.2,
    stock: true,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=80",
    description: "Stylish ceramic mug for coffee and tea."
},

{
    name: "Premium Bedsheet Set",
    brand: "Wakefit",
    price: 1599,
    category: "Home",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable and stylish bedsheet set for your bedroom."
},
// ---------- GAMING ----------

{
    name: "PlayStation 5",
    brand: "Sony",
    price: 49999,
    category: "Gaming",
    rating: 4.8,
    stock: true,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=500&q=80",
    description: "Next-generation gaming console with powerful performance."
},

{
    name: "Xbox Series X",
    brand: "Microsoft",
    price: 49999,
    category: "Gaming",
    rating: 4.7,
    stock: true,
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80",
    description: "Powerful gaming console for an immersive gaming experience."
},

{
    name: "Gaming Keyboard",
    brand: "Logitech",
    price: 2999,
    category: "Gaming",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=500&q=80",
    description: "RGB mechanical keyboard designed for gaming."
},

// ---------- WATCHES ----------

{
    name: "Analog Watch",
    brand: "Fossil",
    price: 7999,
    category: "Watches",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    description: "Classic analog watch with a premium design."
},

{
    name: "Smart Watch",
    brand: "boAt",
    price: 2499,
    category: "Watches",
    rating: 4.3,
    stock: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    description: "Smart watch with fitness and everyday tracking features."
},

// ---------- ACCESSORIES ----------

{
    name: "Leather Wallet",
    brand: "WildHorn",
    price: 799,
    category: "Accessories",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80",
    description: "Compact leather wallet with multiple card slots."
},

{
    name: "Sunglasses",
    brand: "Ray-Ban",
    price: 5999,
    category: "Accessories",
    rating: 4.6,
    stock: true,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80",
    description: "Stylish sunglasses with a classic design."
},

{
    name: "Backpack",
    brand: "American Tourister",
    price: 1999,
    category: "Accessories",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    description: "Spacious backpack for college, office and travel."
},

{
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 999,
    category: "Accessories",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable wireless mouse for everyday computer use."
},

{
    name: "USB-C Charging Cable",
    brand: "Anker",
    price: 699,
    category: "Accessories",
    rating: 4.3,
    stock: true,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80",
    description: "Durable USB-C charging cable for compatible devices."
},
// ---------- MORE MOBILES ----------

{
    name: "Google Pixel 9",
    brand: "Google",
    price: 79999,
    category: "Mobiles",
    rating: 4.7,
    stock: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    description: "Google smartphone with an excellent camera and clean Android experience."
},

{
    name: "Vivo V40",
    brand: "Vivo",
    price: 34999,
    category: "Mobiles",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    description: "Stylish smartphone with a powerful camera."
},

// ---------- MORE LAPTOPS ----------

{
    name: "MacBook Air M3",
    brand: "Apple",
    price: 99999,
    category: "Laptops",
    rating: 4.8,
    stock: true,
    image: "https://www.phoneplacekenya.com/wp-content/uploads/2024/04/13-inch-MacBook-Air-M3.webp",
    description: "Powerful and lightweight Apple laptop for work and study."
},

{
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    price: 64999,
    category: "Laptops",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    description: "Slim and reliable laptop for everyday productivity."
},

{
    name: "ASUS Vivobook 15",
    brand: "ASUS",
    price: 57999,
    category: "Laptops",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=500&q=80",
    description: "Versatile laptop suitable for students and professionals."
},

// ---------- MORE ELECTRONICS ----------

{
    name: "Apple AirPods Pro",
    brand: "Apple",
    price: 24999,
    category: "Electronics",
    rating: 4.7,
    stock: true,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=500&q=80",
    description: "Wireless earbuds with premium sound and noise cancellation."
},

{
    name: "Canon EOS Camera",
    brand: "Canon",
    price: 54999,
    category: "Electronics",
    rating: 4.6,
    stock: true,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
    description: "Digital camera for photography enthusiasts."
},

{
    name: "Samsung 43-inch Smart TV",
    brand: "Samsung",
    price: 42999,
    category: "Electronics",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80",
    description: "Smart TV with a large display and modern features."
},

// ---------- MORE FASHION ----------

{
    name: "Denim Jeans",
    brand: "Levi's",
    price: 2999,
    category: "Fashion",
    rating: 4.5,
    stock: true,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=500&q=80",
    description: "Classic denim jeans suitable for casual outfits."
},

{
    name: "Women's Handbag",
    brand: "Lavie",
    price: 1999,
    category: "Fashion",
    rating: 4.4,
    stock: true,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
    description: "Elegant handbag for everyday use."
}


];

/* Sync existing products to the Flask database */
fetch("https://myshop-608w.onrender.com/api/products/import", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(productsData)
})
.then(response => {
    if (!response.ok) {
        throw new Error("Product import failed");
    }
    return response.json();
})
.then(data => {
    console.log(data.message);
})
.catch(error => {
    console.error("Database sync error:", error);
});

// ================= DISPLAY PRODUCTS =================

let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("myWishlist")) || [];
let orders = JSON.parse(localStorage.getItem("myOrders")) || [];

let currentProduct = null;
let currentProducts = [...productsData];


// ================= COMMON FUNCTIONS =================

function getProductByName(productName) {

    return productsData.find(function(product) {
        return product.name === productName;
    });

}


function formatPrice(price) {

    return "₹" + Number(price).toLocaleString("en-IN");

}


function saveCart() {

    localStorage.setItem(
        "myCart",
        JSON.stringify(cart)
    );

}


function saveWishlist() {

    localStorage.setItem(
        "myWishlist",
        JSON.stringify(wishlist)
    );

}


// ================= DISPLAY PRODUCTS =================

function displayProducts(list = productsData) {

    let container =
        document.getElementById("product-container");

    let noProducts =
        document.getElementById("no-products");

    container.innerHTML = "";

    currentProducts = list;


    if (list.length === 0) {

        noProducts.style.display = "block";

        return;

    }

    noProducts.style.display = "none";


    list.forEach(function(product, index) {

        let card =
            document.createElement("div");

        card.className = "product-card";

        card.dataset.productName =
            product.name;


        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <p class="brand">
                ${product.brand || "MyShop"}
            </p>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${formatPrice(product.price)}
            </p>

            <p class="stock ${product.stock ? "" : "out-of-stock"}">
                ${product.stock ? "In Stock" : "Out of Stock"}
            </p>

            <p>
                ⭐ ${product.rating}/5
            </p>

            <p>
                ${product.category}
            </p>

            <button
                class="add-cart"
                data-index="${index}"
                ${product.stock ? "" : "disabled"}
            >
                ${product.stock ? "Add to Cart" : "Out of Stock"}
            </button>

            <button
                class="buy-now"
                data-index="${index}"
                ${product.stock ? "" : "disabled"}
            >
                Buy Now
            </button>
            <button
                class="wishlist-btn"
                data-index="${index}"
            >
               ❤️ Wishlist
            </button>

        `;

        container.appendChild(card);

    });

}


// ================= CART ELEMENTS =================

let cartButton =
    document.getElementById("cart-btn");

let cartBox =
    document.getElementById("cart-box");


// ================= PRODUCT CONTAINER EVENTS =================

let productContainer =
    document.getElementById("product-container");


productContainer.addEventListener("click", function(event) {

    let button =
        event.target.closest("button");

    if (!button) {
        return;
    }


    let index =
        Number(button.dataset.index);

    let product =
        currentProducts[index];

    if (!product) {
        return;
    }


    // ================= ADD TO CART =================

    if (button.classList.contains("add-cart")) {

        addProductToCart(product);

    }


    // ================= BUY NOW =================

    if (button.classList.contains("buy-now")) {

        buyProduct(product);

    }
    // ================= WISHLIST =================

   if (button.classList.contains("wishlist-btn")) {

        let alreadyExists = wishlist.find(function(item) {

            return item.name === product.name;
 
        });
  

        if (alreadyExists) {

            alert("Product already in Wishlist!");

        }

        else {

            wishlist.push(product);

            saveWishlist();

            showWishlist();

            alert("❤️ Added to Wishlist!");

        }

    }

});


// ================= ADD PRODUCT TO CART =================

function addProductToCart(product) {

    if (!product.stock) {

        alert("Sorry, this product is out of stock.");

        return;

    }


    let existingProduct =
        cart.find(function(item) {

            return item.name === product.name;

        });


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    saveCart();

    showCart();

    alert(product.name + " added to cart 🛒");

}


// ================= SHOW CART =================

function showCart() {

    let cartItems =
        document.getElementById("cart-items");

    let cartTotal =
        document.getElementById("cart-total");


    cartItems.innerHTML = "";


    let total = 0;
    let totalQuantity = 0;


    if (cart.length === 0) {

        cartItems.innerHTML =
            "<p>Your cart is empty.</p>";

    }


    cart.forEach(function(item, index) {

        let priceNumber =
            Number(item.price);


        let subtotal =
            priceNumber * item.quantity;


        total += subtotal;

        totalQuantity += item.quantity;


        let itemElement =
            document.createElement("div");


        itemElement.innerHTML = `

            <p>
                <strong>${item.name}</strong>
                -
                ${formatPrice(subtotal)}
            </p>

            <button
                onclick="decreaseQuantity(${index})"
            >
                -
            </button>

            <span>
                ${item.quantity}
            </span>

            <button
                onclick="increaseQuantity(${index})"
            >
                +
            </button>

            <button
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>

            <hr>

        `;


        cartItems.appendChild(itemElement);

    });


    cartTotal.innerText =
        "Total: " + formatPrice(total);


    cartButton.innerText =
        "Cart (" + totalQuantity + ")";


    saveCart();

}


// ================= INCREASE QUANTITY =================

function increaseQuantity(index) {

    if (!cart[index]) {
        return;
    }

    cart[index].quantity++;

    showCart();

}


// ================= DECREASE QUANTITY =================

function decreaseQuantity(index) {

    if (!cart[index]) {
        return;
    }


    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }

    else {

        cart.splice(index, 1);

    }


    showCart();

}


// ================= REMOVE PRODUCT =================

function removeFromCart(index) {

    if (!cart[index]) {
        return;
    }


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


searchBox.addEventListener("input", function() {

    let searchText =
        searchBox.value.toLowerCase().trim();


    let filteredProducts =
        productsData.filter(function(product) {

            return (
                product.name.toLowerCase().includes(searchText) ||
                product.brand.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText)
            );

        });


    displayProducts(filteredProducts);

});


// ================= CATEGORY FILTER =================

function filterProducts(category) {

    if (category === "All") {

        displayProducts(productsData);

        return;

    }


    let filteredProducts =
        productsData.filter(function(product) {

            return product.category === category;

        });


    displayProducts(filteredProducts);

}


// ================= CATEGORY BUTTONS =================

document.getElementById("mobiles-btn").onclick =
    function() {

        filterProducts("Mobiles");

    };


document.getElementById("fashion-btn").onclick =
    function() {

        filterProducts("Fashion");

    };


document.getElementById("electronics-btn").onclick =
    function() {

        filterProducts("Electronics");

    };


document.getElementById("beauty-btn").onclick =
    function() {

        filterProducts("Beauty");

    };


document.getElementById("home-btn").onclick =
    function() {

        filterProducts("Home");

    };


document.getElementById("all-btn").onclick =
    function() {

        searchBox.value = "";

        filterProducts("All");

    };


// ================= PRODUCT DETAILS =================

function openProduct(productName) {

    let product =
        getProductByName(productName);


    if (!product) {

        return;

    }


    currentProduct = product;


    document.getElementById("detail-name").innerText =
        product.name;


    document.getElementById("detail-price").innerText =
        formatPrice(product.price);


    document.getElementById("detail-rating").innerText =
        "⭐ " + product.rating + "/5";


    document.getElementById("detail-category").innerText =
        "Category: " + product.category;


    document.getElementById("detail-stock").innerText =
        product.stock ? "In Stock" : "Out of Stock";


    document.getElementById("detail-stock").style.color =
        product.stock ? "green" : "red";


    document.getElementById("detail-description").innerText =
        product.description;


    let detailCartButton =
        document.getElementById("detail-cart");


    detailCartButton.disabled =
        !product.stock;


    detailCartButton.innerText =
        product.stock
        ? "Add to Cart"
        : "Out of Stock";


    document.getElementById("product-details").style.display =
        "block";

}


// ================= PRODUCT CARD NAME CLICK =================

productContainer.addEventListener("click", function(event) {

    if (event.target.tagName === "H3") {

        openProduct(event.target.innerText);

    }

});


// ================= DETAIL ADD TO CART =================

document.getElementById("detail-cart").onclick =
    function() {

        if (!currentProduct) {
            return;
        }


        addProductToCart(currentProduct);

    };


// ================= CLOSE PRODUCT DETAILS =================

document.getElementById("close-details").onclick =
    function() {

        document.getElementById("product-details").style.display =
            "none";

    };


// ================= BUY NOW =================

function buyProduct(product) {

    if (!product.stock) {

        alert("Sorry, this product is out of stock.");

        return;

    }


    let existingProduct =
        cart.find(function(item) {

            return item.name === product.name;

        });


    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    saveCart();

    showCart();

    showCheckout();

}


// Keep old function name also working
function buyNow(productName) {

    let product =
        getProductByName(productName);


    if (product) {

        buyProduct(product);

    }

}


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
        document.getElementById("username").value.trim();

    let email =
        document.getElementById("email").value.trim();


    if (username === "") {

        alert("Please enter your name.");

        return;

    }


    if (email === "") {

        alert("Please enter your email.");

        return;

    }


    let user = {

        name: username,

        email: email

    };


    localStorage.setItem(
        "myUser",
        JSON.stringify(user)
    );


    loginButton.innerText =
        "Hi, " + username;


    loginBox.style.display =
        "none";

};


// ================= LOAD SAVED USER =================

let savedUser =
    JSON.parse(localStorage.getItem("myUser"));


if (savedUser) {

    loginButton.innerText =
        "Hi, " + savedUser.name;

}


// ================= CHECKOUT =================

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

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    let summaryItems =
        document.getElementById("summary-items");

    let summaryTotal =
        document.getElementById("summary-total");


    summaryItems.innerHTML = "";


    let total = 0;


    cart.forEach(function(item) {

        let subtotal =
            Number(item.price) * item.quantity;


        total += subtotal;


        let itemElement =
            document.createElement("p");


        itemElement.innerText =
            item.name +
            " × " +
            item.quantity +
            " = " +
            formatPrice(subtotal);


        summaryItems.appendChild(itemElement);

    });


    summaryTotal.innerText =
        "Total: " + formatPrice(total);


    document.getElementById("checkout-page").style.display =
        "block";


    document.getElementById("cart-box").style.display =
        "none";

}


// ================= CLOSE CHECKOUT =================

document.getElementById("close-checkout").onclick =
    function() {

        document.getElementById("checkout-page").style.display =
            "none";

    };


// ================= PLACE ORDER =================


document.getElementById("place-order").onclick = async function () {

    const customerName =
        document.getElementById("customer-name").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const pincode =
        document.getElementById("pincode").value.trim();

    const paymentMethod =
        document.getElementById("payment-method").value;

    if (
        customerName === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ) {
        alert("Please fill all delivery details.");
        return;
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
        alert("Please enter a valid 6-digit pincode.");
        return;
    }

    if (!Array.isArray(cart) || cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const button = document.getElementById("place-order");
    button.disabled = true;

    try {
        const response = await fetch("https://myshop-608w.onrender.com/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                customer_name: customerName,
                address: address,
                city: city,
                pincode: pincode,
                payment_method: paymentMethod,
                items: cart.map(function (item) {
                    return {
                        name: item.name,
                        quantity: Number(item.quantity)
                    };
                })
            })
        });

        const result = await response.json();

        if (!response.ok || result.status !== "success") {
            throw new Error(result.message || "Could not place order.");
        }

        let paymentText;

        if (paymentMethod === "cod") {
            paymentText = "Cash on Delivery";
        } else if (paymentMethod === "upi") {
            paymentText = "UPI";
        } else {
            paymentText = "Card";
        }

        // Save order locally for the existing Orders section.
        orders.push({
            orderId: result.order_id,
            product: cart.map(function (item) {
                return item.name + " × " + item.quantity;
            }).join(", "),
            quantity: cart.reduce(function (total, item) {
                return total + Number(item.quantity);
            }, 0),
            total: formatPrice(result.total),
            payment: paymentText
        });

        localStorage.setItem("myOrders", JSON.stringify(orders));

        document.getElementById("selected-payment").innerText =
            "Payment Method: " + paymentText;

        alert("Order placed successfully! Order ID: " + result.order_id);

        cart = [];
        localStorage.removeItem("myCart");

        showCart();

        document.getElementById("checkout-page").style.display = "none";
        document.getElementById("order-success").style.display = "block";

        document.getElementById("order-success").scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        alert("Order failed: " + error.message);
        console.error("Order error:", error);
    } finally {
        button.disabled = false;
    }
};


// ================= CONTINUE SHOPPING =================

document.getElementById("continue-shopping").onclick =
    function() {

        document.getElementById("order-success").style.display =
            "none";

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };


// ================= CLEAR CART =================

let clearCartButton =
    document.getElementById("clear-cart-btn");


clearCartButton.onclick =
    function() {

        if (cart.length === 0) {

            alert("Cart is already empty.");

            return;

        }


        cart = [];


        localStorage.removeItem("myCart");


        showCart();


        alert("Cart cleared!");

    };


// ================= ORDERS =================

let ordersButton =
    document.getElementById("orders-btn");

let ordersBox =
    document.getElementById("orders-box");

let closeOrders =
    document.getElementById("close-orders");


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

            <h3>
                Order #${index + 1}
            </h3>

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


ordersButton.onclick =
    function() {

        showOrders();

        ordersBox.style.display =
            "block";

    };


closeOrders.onclick =
    function() {

        ordersBox.style.display =
            "none";

    };


// ================= WISHLIST =================

let wishlistButton =
    document.getElementById("wishlist-btn");

let wishlistBox =
    document.getElementById("wishlist-box");

let closeWishlist =
    document.getElementById("close-wishlist");


function addToWishlist(productName) {

    let product =
        getProductByName(productName);


    if (!product) {
        return;
    }


    let exists =
        wishlist.includes(productName);


    if (exists) {

        alert(
            "Product is already in your wishlist ❤️"
        );

        return;

    }


    wishlist.push(productName);


    saveWishlist();


    showWishlist();


    alert(
        productName +
        " added to wishlist ❤️"
    );

}


function showWishlist() {

    let wishlistItems =
        document.getElementById("wishlist-items");


    wishlistItems.innerHTML = "";


    if (wishlist.length === 0) {

        wishlistItems.innerHTML =
            "<p>Your wishlist is empty.</p>";

    }

    else {

        wishlist.forEach(function(productName, index) {

            let product =
                getProductByName(productName);


            if (!product) {
                return;
            }


            let item =
                document.createElement("div");


            item.innerHTML = `

                <p>
                    <strong>
                        ${product.name}
                    </strong>
                    -
                    ${formatPrice(product.price)}
                </p>

                <button
                    class="wishlist-cart-btn"
                    data-name="${product.name}"
                >
                    Add to Cart
                </button>

                <button
                    class="wishlist-remove-btn"
                    data-index="${index}"
                >
                    Remove
                </button>

                <hr>

            `;


            wishlistItems.appendChild(item);

        });

    }


    wishlistButton.innerText =
        "❤️ Wishlist (" +
        wishlist.length +
        ")";

}


// ================= WISHLIST OPEN =================

wishlistButton.onclick =
    function() {

        showWishlist();

        wishlistBox.style.display =
            "block";

    };


// ================= WISHLIST CLOSE =================

closeWishlist.onclick =
    function() {

        wishlistBox.style.display =
            "none";

    };


// ================= WISHLIST EVENTS =================

document.getElementById("wishlist-items")
    .addEventListener("click", function(event) {


        // Add wishlist item to cart

        if (
            event.target.classList.contains(
                "wishlist-cart-btn"
            )
        ) {

            let productName =
                event.target.dataset.name;


            let product =
                getProductByName(productName);


            if (product) {

                addProductToCart(product);

            }

        }


        // Remove wishlist item

        if (
            event.target.classList.contains(
                "wishlist-remove-btn"
            )
        ) {

            let index =
                Number(
                    event.target.dataset.index
                );


            wishlist.splice(index, 1);


            saveWishlist();


            showWishlist();

        }

    });


// ================= INITIAL LOAD =================

displayProducts();

showCart();

showWishlist();

console.log("MyShop JavaScript is working!");