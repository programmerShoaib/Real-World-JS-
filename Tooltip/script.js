document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-custom";
    document.body.appendChild(tooltip);
    const elements = document.querySelectorAll("[data-tooltip]");

    elements.forEach((element) => {
        element.addEventListener("mouseenter", showTooltip);
        element.addEventListener("mouseleave", hideTooltip);
        element.addEventListener("mousemove", moveTooltip);
    });

    function showTooltip(e) {
        const text = this.getAttribute("data-tooltip");
        tooltip.textContent = text;
        tooltip.classList.add("visible");
        moveTooltip.call(this, e);
    }

    function hideTooltip() {
        tooltip.classList.remove("visible");
    }

    function moveTooltip(e) {
        const tooltipHeight = tooltip.offsetHeight;
        const tooltipWidth = tooltip.offsetWidth;
        tooltip.style.top = e.pageY - tooltipHeight - 10 + "px";
        tooltip.style.left = e.pageX - tooltipWidth / 2 + "px";
        // const coords = e.currentTarget.getBoundingClientRect();
        // const left = coords.left + window.scrollX;
        // const top = coords.top + window.scrollY;
        // tooltip.style.top = top + "px";
        // tooltip.style.left = left + "px";
        // if (window.innerWidth - left < tooltip.offsetWidth) {
        //     tooltip.style.left = left - tooltip.offsetWidth + "px";
        // }
    }
});