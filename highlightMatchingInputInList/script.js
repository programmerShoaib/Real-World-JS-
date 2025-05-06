const input = document.getElementById("input");
const listItems = document.querySelectorAll("#item-list li");

input.addEventListener("input", () => {
    const inputValue = input.value.toLowerCase();
    const items = document.querySelectorAll("#item-list #input-list-items");
    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        const index = text.indexOf(inputValue);
        if (index !== -1 && inputValue !== "") {
            const highlightedText = item.textContent.substring(
                index, index + inputValue.length
            );
            item.innerHTML = item.textContent.replace(
                highlightedText,
                `<span class="text-purple-500">${highlightedText}</span>`
            );
        } else {
            item.innerHTML = item.textContent;
        }
    });
});



// const input = document.getElementById("input");
// input.addEventListener("input", () => {
//     const inputValue = input.value.toLowerCase();
//     const items = document.querySelectorAll("#item-list #input-list-items");
//     items.forEach((item) => {
//         const text = item.textContent.toLowerCase();
//         const index = text.indexOf(inputValue);
//         if (index !== -1 && inputValue !== "") {
//             const highlightedText = item.textContent.substring(
//                 index, 
//                 index + inputValue.length
//             );
//             item.innerHTML = item.textContent.replace(
//                 highlightedText,
//                 `<span class="text-yellow-600">${highlightedText}</span>`
//             );
//         } else {
//             item.innerHTML = item.textContent;
//         }
//     });
// });



// input.addEventListener("input", () => {
//     const inputValue = input.value.toLowerCase();
//     listItems.forEach((item) => {
//         if (item.textContent.toLowerCase().includes(inputValue)) {
//             item.classList.remove("hidden");
//         } else {
//             item.classList.add("hidden");
//         }
//     });
// });