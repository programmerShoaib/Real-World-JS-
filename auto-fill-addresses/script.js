document.addEventListener("DOMContentLoaded", () => {
    const addressInput = document.getElementById("address-input");          // search input field
    const searchBtn  = document.getElementById("search-button");            // search button
    const addressSuggestion = document.getElementById("address-suggestion");  // address suggestion
    const street = document.getElementById("street");                       // street input field
    const city = document.getElementById("city");                           // city input field
    const state = document.getElementById("state");                         // state input field
    const zip = document.getElementById("zip"); 
    const addressForm = document.getElementById("address-form");                            // zip input field

    const addressDatabase = [       // mock database of addresses
        {
            id: 1,
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001"
        },
        {
            id: 2,
            street: "456 Elm St",
            city: "Los Angeles",
            state: "CA",
            zip: "90001"
        },
        {
            id: 3,
            street: "789 Oak St",
            city: "Chicago",
            state: "IL",
            zip: "60601"
        },
        {
            id: 4,
            street: "321 Pine St",
            city: "San Francisco",
            state: "CA",
            zip: "94101"
        },
        {
            id: 5,
            street: "654 Cedar St",
            city: "Houston",
            state: "TX",
            zip: "77001"
        }
    ];
                // saerch function triger conditions
    searchBtn.addEventListener("click", searchAddresses);    // search button on click
    addressInput.addEventListener("keyup", function(event) {    // search input on pressing enter key 
        if (event.key === "Enter") {
            searchAddresses();
        }
    });

                // add address in data base on submit
    addressForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Address added successfully!");
        // const address = addressForm.elements;
        // const newAddress = {
        //     id: addressDatabase.length + 1,
        //     street: address.street.value,
        //     city: address.city.value,
        //     state: address.state.value,
        //     zip: address.zip.value
        // };
        // addressDatabase.push(newAddress);
        // searchAddresses();
    })


    function searchAddresses() {    // ai generated function
        const address = addressInput.value.toLowerCase();
        const filteredAddresses = addressDatabase.filter((addr) => addr.street.toLowerCase().includes(address));
        addressSuggestion.innerHTML = filteredAddresses.map((addr) => `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`).join("<br>");
        street.value = filteredAddresses[0].street;
        city.value = filteredAddresses[0].city;
        state.value = filteredAddresses[0].state;
        zip.value = filteredAddresses[0].zip;
    }

    function searchAddresses() {
        const query = addressInput.value.toLowerCase().trim();

        // clear the previous search results
        addressSuggestion.innerHTML = "";

        // Return if the query is empty
        if (query === "") {
            return;
        }

        // Filter the address database based on the query
        const filteredAddresses = addressDatabase.filter((addr) =>
             addr.street.toLowerCase().includes(query) ||
             addr.city.toLowerCase().includes(query) ||
             addr.state.toLowerCase().includes(query) ||
             addr.zip.includes(query)
        );

        // display suggestions 
        if (filteredAddresses.length > 0) {
            filteredAddresses.forEach((addr) => {
                const suggestion = document.createElement("div");
                suggestion.classList.add("mb-1", "p-2", "bg-gray-100", "dark:bg-gray-700", "dark:text-white");
                suggestion.textContent = `${addr.street}, ${addr.city}, ${addr.state} ${addr.zip}`;
                    
                // triger this function on clicking the suggestion
                suggestion.addEventListener("click", () => {    
                    fillAddressForm(addr);
                    addressSuggestion.innerHTML = "";
                })

                addressSuggestion.appendChild(suggestion);
            })
        } else {  // if no result found
            const noResults = document.createElement("div");
            noResults.classList.add("mb-1", "p-2", "bg-gray-100", "dark:bg-gray-700", "dark:text-white");
            noResults.textContent = "No results found.";
            addressSuggestion.appendChild(noResults);
        }

        // fill the address form with selected address
        const fillAddressForm = (addr) => {
            street.value = addr.street;
            city.value = addr.city;
            state.value = addr.state;
            zip.value = addr.zip;

            // high light the fields that are filled
            street.classList.add("bg-green-200");
            city.classList.add("bg-green-200");
            state.classList.add("bg-green-200");
            zip.classList.add("bg-green-200");

            // remove  highlight after delay
            setTimeout(() => {
                street.classList.remove("bg-green-200");
                city.classList.remove("bg-green-200");
                state.classList.remove("bg-green-200");
                zip.classList.remove("bg-green-200");
            }, 2000);
        }
    }

})