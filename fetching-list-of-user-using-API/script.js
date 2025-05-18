document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("userList");
    const userListDiv = document.getElementById("userListDiv");
    const userDiv = document.getElementById("userDiv");
    const loader = document.getElementById("loader");
    const fetchButton = document.getElementById("fetch-button");
    const url = "https://jsonplaceholder.typicode.com/users";

    fetchButton.addEventListener("click", async () => {
        const users = await fetchUsers();
        renderUsers(users);
    });

    function renderUsers(users) {  // function to render the users
        users.forEach((user) => { 
            console.log(user);
            const tr = document.createElement("tr");
            tr.classList.add("mb-2", "border", "border-gray-300", "p-2");
            tr.innerHTML = `<td>${user.id}</td>  <td>${user.name}</td>  <td>${user.email}</td> <td>${user.phone}</td>`;
            userList.appendChild(tr);  // append the user to the userList
        });
    }

    async function fetchUsers() {
        try {
            userDiv.classList.add("hidden");   // hide the userDiv
            loader.classList.remove("hidden");  // show the loader
            await new Promise((resolve) => setTimeout(resolve, 3000)); // wait for 3 seconds
            const response = await fetch(url);   // fetch the data
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();  // parse the data
            loader.classList.add("hidden");   // hide the loader
            userDiv.classList.add("hidden");  // hide the userDiv
            userListDiv.classList.remove("hidden");  // show the userListDiv
            return data;
        } catch (error) {
            console.error("Error fetching users:", error);
            return [];
        }
    }
    
});