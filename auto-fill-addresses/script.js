document.addEventListener("DOMContentLoaded", () => {
    const addressInput = document.getElementById("address-input");              // Get the address input field
    const searchBtn = document.getElementById("search-button");                 // Get the search button
    const addressSuggestion = document.getElementById("address-suggestion");    // Get the address suggestion container
    const street = document.getElementById("street");                           // Get the street input field
    const city = document.getElementById("city");                               // Get the city input field
    const state = document.getElementById("state");                             // Get the state input field
    const zip = document.getElementById("zip");                                 // Get the ZIP code input field
    const addressForm = document.getElementById("address-form");                // Get the address form

    // Sample mock address database
    const addressDatabase = [                                               
        { id: 1, street: "123 Main St", city: "New York", state: "NY", zip: "10001" },
        { id: 2, street: "456 Elm St", city: "Los Angeles", state: "CA", zip: "90001" },
        { id: 3, street: "789 Oak St", city: "Chicago", state: "IL", zip: "60601" },
        { id: 4, street: "321 Pine St", city: "San Francisco", state: "CA", zip: "94101" },
        { id: 5, street: "654 Cedar St", city: "Houston", state: "TX", zip: "77001" }
    ];

    // Event listeners on search button and address input to trigger address search
    searchBtn.addEventListener("click", searchAddresses);
    addressInput.addEventListener("keyup", function (event) {
        searchAddresses();
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });

    // Event listener on address form submit
    addressForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Address added successfully!");
        // You can enable saving logic here if needed
    });

    // Function to fill address form fields
    function fillAddressForm(addr) {
        street.value = addr.street;
        city.value = addr.city;
        state.value = addr.state;
        zip.value = addr.zip;

        // Highlight the filled fields
        [street, city, state, zip].forEach(field => {
            field.classList.add("bg-green-200");
            setTimeout(() => field.classList.remove("bg-green-200"), 2000);
        });
    }

    // Function to search for addresses
    function searchAddresses() {
        const query = addressInput.value.toLowerCase().trim();
        addressSuggestion.innerHTML = "";

        // Hide the address suggestion container if the query is empty
        if (query === "") {
            addressSuggestion.classList.add("hidden");
            return;
        }

        // Filter the address database based on the query
        const results = addressDatabase.filter(addr =>
            addr.street.toLowerCase().includes(query) ||
            addr.city.toLowerCase().includes(query) ||
            addr.state.toLowerCase().includes(query) ||
            addr.zip.includes(query)
        );

        // Display the search results
        if (results.length > 0) {
            results.forEach(addr => {
                const suggestion = document.createElement("div");
                suggestion.className = "cursor-pointer mb-1 p-2 bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600 transition";
                suggestion.textContent = `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`;
                suggestion.addEventListener("click", () => {
                    fillAddressForm(addr);
                    addressSuggestion.classList.add("hidden");
                    addressSuggestion.innerHTML = "";
                });
                addressSuggestion.appendChild(suggestion);
            });
            addressSuggestion.classList.remove("hidden");
        } else {        // If no results found
            const noResults = document.createElement("div");
            noResults.className = "mb-1 p-2 bg-gray-100 dark:bg-gray-700 dark:text-white";
            noResults.textContent = "No results found.";
            addressSuggestion.appendChild(noResults);
            addressSuggestion.classList.remove("hidden");
        }
    }
});
