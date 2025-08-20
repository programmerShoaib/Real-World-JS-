
  document.addEventListener("DOMContentLoaded", () => {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const priceRange = document.getElementById("priceRange");
    const applyFilterBtn = document.getElementById("applyFilter");
    const productContainer = document.getElementById("productContainer");
    const noItemsMessage = document.getElementById("noItemsMessage");

    // Example products (you can replace this with dynamic data)
    const products = [
      { name: "Laptop", price: 50, description: "High performance laptop", img: "https://via.placeholder.com/300x200" },
      { name: "Headphones", price: 20, description: "Noise-cancelling headphones", img: "https://via.placeholder.com/300x200" },
      { name: "Smartphone", price: 80, description: "Latest smartphone", img: "https://via.placeholder.com/300x200" },
      { name: "Keyboard", price: 15, description: "Mechanical keyboard", img: "https://via.placeholder.com/300x200" }
    ];

    // Render products in the grid
    function renderProducts(list) {
      productContainer.innerHTML = "";

      if (list.length === 0) {
        noItemsMessage.classList.remove("hidden");
        return;
      }

      noItemsMessage.classList.add("hidden");

      list.forEach(product => {
        const card = document.createElement("div");
        card.className =
          "border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition";

        card.innerHTML = `
          <div class="h-52 overflow-hidden">
            <img src="${product.img}" alt="${product.name}"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
          <div class="p-4">
            <h5 class="font-semibold text-lg mb-2">${product.name}</h5>
            <p class="text-gray-600 text-sm mb-3 line-clamp-3">${product.description}</p>
            <div class="text-orange-500 font-bold text-lg">$${product.price}</div>
          </div>
        `;
        productContainer.appendChild(card);
      });
    }

    // Filter products based on min/max price
    function applyFilter() {
      const min = parseInt(minPriceInput.value) || 0;
      const max = parseInt(maxPriceInput.value) || 100;

      const filtered = products.filter(p => p.price >= min && p.price <= max);
      renderProducts(filtered);
    }

    // Update maxPrice when slider moves
    priceRange.addEventListener("input", e => {
      maxPriceInput.value = e.target.value;
    });

    // Button click filter
    applyFilterBtn.addEventListener("click", applyFilter);

    // Initial render
    renderProducts(products);
  });

