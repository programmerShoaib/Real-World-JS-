document.addEventListener("DOMContentLoaded", () => {
  // Example product data
  const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    stock: 15
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    stock: 8
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    stock: 0
  },
  {
    id: 4,
    name: 'Laptop Stand',
    price: 29.99,
    image: 'https://m.media-amazon.com/images/I/51mN-RUnn5L._SX679_.jpg',
    stock: 4
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    stock: 12
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80',
    stock: 2
  }
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
