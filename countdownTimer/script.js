document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    let timeLeft = 3600;  // time in secends (e.g 3600 seconds = 1 hour)

    setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        timerElement.innerHTML = `${hours.toString()
            .padStart(2, "0")}:${minutes.toString()
            .padStart(2, "0")}:${seconds.toString()
            .padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
});

    