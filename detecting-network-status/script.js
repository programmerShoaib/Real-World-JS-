document.addEventListener("DOMContentLoaded", () => {
    const networkStatus = document.getElementById("network-status");
    const networkStatusText = document.getElementById("network-status-text");
    const networkStatusIcon = document.querySelector("i");

    const updateNetworkStatus = () => {
        if(navigator.onLine) {
            networkStatusText.textContent = "You're Online";
            networkStatusIcon.style.color = "green";
        } else {
            networkStatusText.textContent = "You're Offline";
            networkStatusIcon.style.color = "red";
        }
        networkStatus.classList.add("animate-bounce");
        setTimeout(() => {
            networkStatus.classList.remove("animate-bounce");
        }, 1500);
    }
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    updateNetworkStatus();
}) 