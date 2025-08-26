document.addEventListener("DOMContentLoaded", () => {
  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: 120, stock: 15, image: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Product 2", price: 90, stock: 4, image: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Product 3", price: 200, stock: 0, image: "https://via.placeholder.com/300x200" }
  ];

  const productContainer = document.getElementById("productContainer");

  // Function to get stock badge with Tailwind classes
  function getStockBadge(stock) {
    if (stock > 10) {
      return `<div class="mt-2 text-center rounded px-3 py-1 text-sm font-medium bg-green-100 text-green-800">In Stock</div>`;
    } else if (stock > 0) {
      return `<div class="mt-2 text-center rounded px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800">Low Stock</div>`;
    } else {
      return `<div class="mt-2 text-center rounded px-3 py-1 text-sm font-medium bg-red-100 text-red-800">Out of Stock</div>`;
    }
  }

  // Render products
  function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
      const productCard = `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <img src="${product.image}" alt="${product.name}" class="h-52 w-full object-cover">
          <div class="p-4 flex flex-col h-full">
            <h5 class="text-lg font-semibold mb-2">${product.name}</h5>
            <p class="text-xl font-bold text-gray-800 mb-3">$${product.price}</p>
            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition mb-2">
              Add to Cart
            </button>
            ${getStockBadge(product.stock)}
          </div>
        </div>
      `;
      productContainer.insertAdjacentHTML("beforeend", productCard);
    });
  }

  renderProducts();

});