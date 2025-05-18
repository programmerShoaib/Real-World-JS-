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

    function renderUsers(users) {
        users.forEach((user) => {
            console.log(user);
            const tr = document.createElement("tr");
            tr.classList.add("mb-2", "border", "border-gray-300", "p-2");
            tr.innerHTML = `<td>${user.id}</td>  <td>${user.name}</td>  <td>${user.email}</td> <td>${user.phone}</td>`;
            userList.appendChild(tr);
        });
    }

    async function fetchUsers() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            loader.classList.add("hidden");
            userDiv.classList.add("hidden");
            userListDiv.classList.remove("hidden");
            return data;
        } catch (error) {
            console.error("Error fetching users:", error);
            return [];
        }
    }
    
});