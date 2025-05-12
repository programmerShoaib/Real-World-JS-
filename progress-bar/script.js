document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const increment = document.getElementById("start-button");
    const decrement = document.getElementById("stop-button");
    let progress = 0;

    increment.addEventListener("click", () => {
        if(progress < 100) {
            progress += 10;
            progressBar.style.width = progress + "%";
            progressBar.setAttribute("aria-valuenow", progress);
        }
    });

    decrement.addEventListener("click", () => {
        if(progress > 0) {
            progress -= 10;
            progressBar.style.width = progress + "%";
            progressBar.setAttribute("aria-valuenow", progress);
        }
    });
});