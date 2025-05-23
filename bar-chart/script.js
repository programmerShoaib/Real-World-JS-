// Wait until the entire HTML document has been loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

    // Get the canvas element with the ID 'myChart' from the HTML
    const ctx = document.getElementById("myChart").getContext("2d");

    // Create a new bar chart using Chart.js
    const myChart = new Chart(ctx, {
        type: 'bar', // The type of chart: 'bar' creates a vertical bar chart

        data: {
            // Labels for the x-axis (categories of the bars)
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

            // The dataset(s) to be plotted
            datasets: [{
                label: '# of Votes', // Label shown in the legend and tooltip
                data: [12, 19, 3, 5, 2, 3], // Data values for each bar

                // Background color for each bar (slightly transparent)
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',  // Red
                    'rgba(54, 162, 235, 0.2)',  // Blue
                    'rgba(255, 206, 86, 0.2)',  // Yellow
                    'rgba(75, 192, 192, 0.2)',  // Green
                    'rgba(153, 102, 255, 0.2)', // Purple
                    'rgba(255, 159, 64, 0.2)'   // Orange
                ],

                // Border color for each bar (solid, no transparency)
                borderColor: [
                    'rgba(255, 99, 132, 1)', 
                    'rgba(54, 162, 235, 1)', 
                    'rgba(255, 206, 86, 1)', 
                    'rgba(75, 192, 192, 1)', 
                    'rgba(153, 102, 255, 1)', 
                    'rgba(255, 159, 64, 1)'
                ],

                borderWidth: 1 // Width of the bar borders (in pixels)
            }]
        },

        options: {
            // Configure chart options
            scales: {
                y: {
                    beginAtZero: true // Start y-axis from 0 instead of the lowest data point
                }
            }
        }
    });
});
