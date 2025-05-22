document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll("ol li");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    let currentStep = 1;

    function updateSteps() {
        steps.forEach((step, index) => {
            const span = step.querySelector("span");

            if (index < currentStep) {
                step.classList.add("text-blue-600", "dark:text-blue-500");
                span.classList.add("bg-blue-100", "dark:bg-blue-800");
                span.innerHTML = `
                    <svg class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                `;
            } else if (index === currentStep) {
                step.classList.add("text-blue-600", "dark:text-blue-500");
                span.classList.add("bg-blue-100", "dark:bg-blue-800");
                span.innerHTML = index + 1;
            } else {
                step.classList.remove("text-blue-600", "dark:text-blue-500");
                span.classList.remove("bg-blue-100", "dark:bg-blue-800");
                span.classList.add("bg-gray-100", "dark:bg-gray-700");
                span.innerHTML = index + 1;
            }
        });

        // Disable buttons appropriately
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === steps.length - 1;
    }

    nextBtn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateSteps();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateSteps();
        }
    });

    // Initial update
    updateSteps();
});
