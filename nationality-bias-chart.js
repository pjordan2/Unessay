const nationalityBiasCtx = document.getElementById('nationalityBiasChart').getContext('2d');
new Chart(nationalityBiasCtx, {
    type: 'radar',
    data: {
        labels: ['USA', 'Russia', 'China', 'Germany', 'Japan', 'France'],
        datasets: [{
            label: 'Perceived Bias in Olympic Judging (1-10 scale)',
            data: [3, 7, 6, 4, 5, 4],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgb(255, 206, 86)',
            pointBackgroundColor: 'rgb(255, 206, 86)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 206, 86)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        }
    }
});