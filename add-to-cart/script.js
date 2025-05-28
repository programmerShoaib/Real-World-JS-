document.addEventListener("DOMContentLoaded", () => {
    // Get references to DOM elements
    const productContainer = document.getElementById("product-container");
    const cartItems = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");
    const clearCartButton = document.getElementById("clear-cart-button");

    // Cart and product data
    let cart = [];
    const products = [
        { id: 1, name: "Product 1", price: "10.00" },
        { id: 2, name: "Product 2", price: "20.00" },
        { id: 3, name: "Product 3", price: "30.00" },
        { id: 4, name: "Product 4", price: "40.00" },
    ];

    // Create and render each product card with "Add to Cart" button
    products.forEach((product) => {
        const card = document.createElement("div");
        card.id = `product-${product.id}`;
        card.className = "bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4";

        card.innerHTML = `
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">${product.name}</h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">Description</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Price: $${product.price}</p>
        `;

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.className = "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2";
        addToCartButton.dataset.name = product.name;
        addToCartButton.dataset.price = product.price;

        // Add click event to "Add to Cart" button
        addToCartButton.addEventListener("click", () => {
            const item = {
                name: addToCartButton.dataset.name,
                price: addToCartButton.dataset.price,
            };
            cart.push(item);
            updateCart();
        });

        card.appendChild(addToCartButton);
        productContainer.appendChild(card);
    });

    // Update cart display and total price
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
            total += parseFloat(item.price);
        });

        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Clear the cart on button click
    clearCartButton.addEventListener("click", () => {
        cart = [];
        updateCart();
    });
});
