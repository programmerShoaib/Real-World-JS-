document.addEventListener("DOMContentLoaded", () => {
  const foodItems = [
    {
      id: 1,
      name: "Veg Burger",
      price: 5.99,
      type: "veg",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Delicious vegetarian burger with fresh vegetables and special sauce."
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: 8.99,
      type: "non-veg",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Juicy chicken pieces marinated in spices and grilled to perfection."
    },
    {
      id: 3,
      name: "Paneer Tikka",
      price: 7.49,
      type: "veg",
      image: "https://images.unsplash.com/photo-1551881192-002e02ad3d87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Cottage cheese cubes marinated in spices and grilled with vegetables."
    },
    {
      id: 4,
      name: "Fish and Chips",
      price: 9.99,
      type: "non-veg",
      image: "https://images.unsplash.com/photo-1576777647209-e8733d7b851d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Crispy fried fish fillets served with golden french fries."
    },
    {
      id: 5,
      name: "Margherita Pizza",
      price: 11.99,
      type: "veg",
      image: "https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil."
    },
    {
      id: 6,
      name: "BBQ Chicken Pizza",
      price: 13.99,
      type: "non-veg",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Pizza topped with BBQ sauce, chicken pieces, and cheese."
    },
    {
      id: 7,
      name: "Garden Salad",
      price: 6.49,
      type: "veg",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Fresh salad with mixed greens, tomatoes, cucumbers, and vinaigrette dressing."
    },
    {
      id: 8,
      name: "Chicken Caesar Salad",
      price: 8.49,
      type: "non-veg",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Classic Caesar salad topped with grilled chicken strips."
    }
  ];

  const foodContainer = document.getElementById("foodContainer");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const noItemsMessage = document.getElementById("noItemsMessage");

  // Card Creator
  function createFoodCard(item) {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden relative";

    const indicatorClass = item.type === "veg" ? "veg-indicator" : "non-veg-indicator";

    card.innerHTML = `
      <div class="food-type-indicator ${indicatorClass}"></div>
      <div class="h-52 overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-1">${item.name}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-2 overflow-hidden" style="max-height: 60px">${item.description}</p>
        <p class="text-orange-500 font-bold text-lg">$${item.price}</p>
      </div>
    `;
    return card;
  }

  // Render Food Items
  function renderFoodItems(items) {
    foodContainer.innerHTML = "";
    if (items.length === 0) {
      noItemsMessage.classList.remove("hidden");
      return;
    } else {
      noItemsMessage.classList.add("hidden");
    }

    items.forEach(item => {
      const card = createFoodCard(item);
      foodContainer.appendChild(card);
    });
  }

  // Filtering Logic
  function filterFoodItems(filterType) {
    if (filterType === "all") {
      renderFoodItems(foodItems);
    } else {
      const filtered = foodItems.filter(item => item.type === filterType);
      renderFoodItems(filtered);
    }
  }

  // Initialize All Items on Load
  renderFoodItems(foodItems);

  // Button Click Events
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filterType = button.getAttribute("data-filter");

      // Remove active styles
      filterButtons.forEach(btn => btn.classList.remove("bg-blue-500", "text-white"));
      // Add active styles to clicked
      button.classList.add("bg-blue-500", "text-white");

      filterFoodItems(filterType);
    });
  });
});
