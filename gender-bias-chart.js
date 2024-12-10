document.addEventListener('DOMContentLoaded', function() {
    const genderBiasCtx = document.getElementById('genderBiasChart').getContext('2d');
    new Chart(genderBiasCtx, {
        type: 'line',
        data: {
            labels: ['1900', '1920', '1948', '1960', '1980', '2000', '2020', '2024'],
            datasets: [{
                label: 'Female Participation in Olympics (%)',
                data: [2.2, 2.5, 9.5, 11.4, 21.5, 38.2, 47.8, 50],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage of Female Athletes'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Female Participation in Olympic Games Over Time'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});