
  document.addEventListener("DOMContentLoaded", () => {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const priceRange = document.getElementById("priceRange");
    const applyFilterBtn = document.getElementById("applyFilter");
    const productContainer = document.getElementById("productContainer");
    const noItemsMessage = document.getElementById("noItemsMessage");

    // Example products (you can replace this with dynamic data)
    const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "High-quality wireless earbuds with noise cancellation technology."
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Track your fitness and stay connected with this feature-packed smart watch."
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Portable Bluetooth speaker with impressive sound quality and long battery life."
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Durable laptop backpack with multiple compartments and water-resistant material."
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Tactile mechanical keyboard with RGB lighting for gaming and typing."
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Ergonomic wireless mouse with adjustable DPI settings."
    },
    {
      id: 7,
      name: "Monitor Stand",
      price: 19.99,
      image: "https://www.vari.com/on/demandware.static/-/Sites-vari-master-catalog/default/dw8e397c7b/images/large/MA-DUAL/48003-silver/vari-2-monitor_48003_silver_office.jpg",
      description: "Adjustable monitor stand to improve your desk ergonomics and save space."
    },
    {
      id: 8,
      name: "4K Monitor",
      price: 249.99,
      image: "https://i.pcmag.com/imagery/roundups/01Y9bqNdRmGOzHcetHQG2FW-36.fit_lim.size_1050x.webp",
      description: "Ultra-sharp 4K monitor perfect for content creation and gaming."
    }
  ];

    // Render products in the grid
    function renderProducts(list) {
      productContainer.innerHTML = "";

      if (list.length === 0) {          // if list is empty
        noItemsMessage.classList.remove("hidden");
        return;
      }

      noItemsMessage.classList.add("hidden");

      list.forEach(product => {          // for each product if list is not empty
        const card = document.createElement("div");
        card.className =
          "border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition";

        card.innerHTML = `
          <div class="h-52 overflow-hidden">
            <img src="${product.image}" alt="${product.name}"
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

