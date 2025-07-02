document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.getElementById("contentContainer");    // Get the scrollable container  
    const scrollBtn = document.getElementById("scrollToBottomBtn");         // Get the scroll to bottom button

    // the scroll to bottom button code
    scrollContainer.addEventListener("scroll", () => {
        const scrollTop = scrollContainer.scrollTop;    // Get the current scroll position
        const scrollHeight = scrollContainer.scrollHeight;  // Get the total scrollable height
        const clientHeight = scrollContainer.clientHeight;  // Get the height of the scrollable container

        // Check if the scroll position is near the bottom
        const nearBottom = scrollTop + clientHeight >= scrollHeight - 60;    

        // Show or hide the scroll to bottom button
        if (!nearBottom) {
            scrollBtn.classList.add("opacity-100", "visible");
            scrollBtn.classList.remove("opacity-0", "invisible");
        } else {
            scrollBtn.classList.remove("opacity-100", "visible");
            scrollBtn.classList.add("opacity-0", "invisible");
        }
    });

    // Add a click event listener to the scroll to bottom button
    scrollBtn.addEventListener("click", () => {
    scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: "smooth"
    });
});

    // the scroll to top button code
    
    // scrollContainer.addEventListener("scroll", () => {
    //   const scrollTop = scrollContainer.scrollTop;

    //   if (scrollTop > 100) {
    //     scrollTopBtn.classList.add("opacity-100", "visible");
    //     scrollTopBtn.classList.remove("opacity-0", "invisible");
    //   } else {
    //     scrollTopBtn.classList.remove("opacity-100", "visible");
    //     scrollTopBtn.classList.add("opacity-0", "invisible");
    //   }
    // });

    // scrollTopBtn.addEventListener("click", () => {
    //   scrollContainer.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    //   });
    // });
});