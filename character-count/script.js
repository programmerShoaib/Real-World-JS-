let input = document.getElementById("message");
let count = document.getElementById("result");
input.addEventListener("input", () => {
    count.innerHTML = input.value.length;
});

