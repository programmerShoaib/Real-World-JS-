document.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll("#tab-btn");
    const tabs = document.querySelectorAll("#tabPanal");
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            
            // Update buttons 
            btns.forEach((btn) => {
                btn.classList.remove("dark:text-blue-500");
                if (btn.getAttribute("data-tab") === tabId) {   // show the tab button for selected tab and hide others
                    btn.classList.add("dark:text-blue-500");
                }

                // Update Panal
                tabs.forEach((tab) => {
                    tab.classList.add("hidden");

                    if (tab.getAttribute("data-tab") === tabId) {  // show the tab for selected tab button and hide others
                        tab.classList.remove("hidden");
                    }
                })
            });
        });
    });
})
