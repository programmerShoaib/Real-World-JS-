document.addEventListener("DOMContentLoaded", () => {
    const increaseButton = document.getElementById("increase-button");
    const decreaseButton = document.getElementById("decrease-button");
    const fontSizeText = document.getElementById("fontSize");
    let size = 16;

    increaseButton.addEventListener("click", () => {
        size += 2;
        fontSizeText.style.fontSize = size + "px";
    });

    decreaseButton.addEventListener("click", () => {
        size -= 2;
        fontSizeText.style.fontSize = size + "px";
    });
})