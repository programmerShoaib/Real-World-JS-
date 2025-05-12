document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("generate-button");
    const colorDiv = document.getElementById("colorDiv");
    button.addEventListener("click", () => {
        // const r = Math.floor(Math.random() * 256);
        // const g = Math.floor(Math.random() * 256);
        // const b = Math.floor(Math.random() * 256);
        // colorDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        const reandomColor = Math.floor(Math.random() * 16777215).toString(16);
        colorDiv.style.backgroundColor = `#${reandomColor}`;
    });
})