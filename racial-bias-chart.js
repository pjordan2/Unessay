const racialBiasCtx = document.getElementById('racialBiasChart').getContext('2d');
new Chart(racialBiasCtx, {
    type: 'bar',
    data: {
        labels: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
        datasets: [{
            label: 'Percentage of Black Athletes in NBA',
            data: [20, 30, 50, 70, 75, 80, 75, 74],
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});