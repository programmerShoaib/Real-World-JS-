document.addEventListener("DOMContentLoaded", () => {
    
    // Cart and product data
    const products = [
        { id: 1, name: "Product A", price: 19.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product B", price: 29.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product C", price: 39.99, image: "https://via.placeholder.com/150" }
    ];

    const productContainer = document.getElementById("productContainer");   // Product container
    const cartBadge = document.getElementById("cartBadge");     // Cart badge
    let cartCount = 0;  // Cart count

    // Update cart count
    function updateCart() {
        cartCount++;
        cartBadge.textContent = cartCount;  // Update cart badge text count
        cartBadge.classList.add("cart-badge-update");
        setTimeout(() => cartBadge.classList.remove("cart-badge-update"), 300);
    }

    // Render products
    products.forEach(product => {
        const card = document.createElement("div"); // Create product card
        card.className = "bg-white rounded-lg shadow p-4 hover:shadow-lg transform hover:-translate-y-1 transition dark:bg-gray-800";

        card.innerHTML = `
            <div class="flex justify-center items-center h-48 mb-4">
                <img src="${product.image}" alt="${product.name}" class="max-h-full max-w-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">${product.name}</h3>
            <p class="text-red-500 font-bold text-md mb-4">$${product.price}</p>
            <button class="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center btn-add-to-cart transition duration-150 ease-in-out">
                <i class="fas fa-cart-plus mr-2"></i> Add to Cart
            </button>
        `;

        // Add click event to "Add to Cart" button and update cart
        card.querySelector(".btn-add-to-cart").addEventListener("click", (e) => {
            e.target.classList.add("bg-green-600");
            e.target.innerHTML = `<i class="fas fa-check mr-2"></i> Added`;
            updateCart();
            setTimeout(() => {
                e.target.classList.remove("bg-green-600");
                e.target.innerHTML = `<i class="fas fa-cart-plus mr-2"></i> Add to Cart`;
            }, 1500);
        });

    productContainer.appendChild(card);
    });
})