document.addEventListener("DOMContentLoaded", () => {
    const colorInput = document.getElementById("color-input");
    const colorPreview = document.getElementById("color-preview");
    colorInput.addEventListener("input", () => {
        colorPreview.style.backgroundColor = colorInput.value;
    });
})