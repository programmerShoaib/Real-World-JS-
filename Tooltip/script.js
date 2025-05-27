// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Create a new <div> element for the tooltip
    const tooltip = document.createElement("div");

    // Assign it a class that controls styling (you should define `.tooltip-custom` in your CSS)
    tooltip.className = "tooltip-custom";

    // Add the tooltip div to the end of the <body>
    document.body.appendChild(tooltip);

    // Select all elements that have a "data-tooltip" attribute
    const elements = document.querySelectorAll("[data-tooltip]");

    // Attach event listeners to each tooltip-enabled element
    elements.forEach((element) => {
        // Show tooltip on mouse enter
        element.addEventListener("mouseenter", showTooltip);
        
        // Hide tooltip on mouse leave
        element.addEventListener("mouseleave", hideTooltip);
        
        // Move tooltip with the mouse
        element.addEventListener("mousemove", moveTooltip);
    });

    // Function to display the tooltip
    function showTooltip(e) {
        // Get tooltip text from the element's data-tooltip attribute
        const text = this.getAttribute("data-tooltip");
        
        // Set the tooltip's content
        tooltip.textContent = text;
        
        // Add a "visible" class to make the tooltip show up
        tooltip.classList.add("visible");

        // Position the tooltip
        moveTooltip.call(this, e);
    }

    // Function to hide the tooltip
    function hideTooltip() {
        tooltip.classList.remove("visible");
    }

    // Function to move/position the tooltip based on mouse position
    function moveTooltip(e) {
        // Get current dimensions of the tooltip
        const tooltipHeight = tooltip.offsetHeight;
        const tooltipWidth = tooltip.offsetWidth;

        // Position the tooltip above the cursor with some offset
        tooltip.style.top = e.pageY - tooltipHeight - 10 + "px";

        // Center it horizontally relative to the cursor
        tooltip.style.left = e.pageX - tooltipWidth / 2 + "px";
    }
});
