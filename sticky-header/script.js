document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("sticky-nav");
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
})
