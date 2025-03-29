window.onload = function() {
    // Territorial Issues Chart
    const territorialCtx = document.getElementById('territorialChart').getContext('2d');
    new Chart(territorialCtx, {
        type: 'bar',
        data: {
            labels: [
                'Strongly disagree',
                'Tend to disagree',
                'Neither agree nor disagree',
                'Tend to agree',
                'Strongly agree',
                'Don\'t know'
            ],
            datasets: [{
                label: 'Response percentage',
                data: [42, 16, 10, 15, 10, 8],
                backgroundColor: [
                    'rgba(43, 76, 111, 0.9)',  // Dark blue
                    'rgba(43, 76, 111, 0.6)',  // Medium blue
                    'rgba(156, 163, 175, 0.8)', // Gray
                    'rgba(237, 67, 55, 0.6)',  // Medium red
                    'rgba(237, 67, 55, 0.9)',  // Dark red
                    'rgba(156, 163, 175, 0.4)'  // Light gray
                ]
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Attitudes Toward Territorial Compromises'
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 50,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                }
            }
        }
    });

    // Regional Distribution Chart
    const regionalCtx = document.getElementById('regionalChart').getContext('2d');
    new Chart(regionalCtx, {
        type: 'doughnut',
        data: {
            labels: ['West', 'East', 'North', 'South', 'Central'],
            datasets: [{
                data: [35, 15, 20, 10, 20],
                backgroundColor: [
                    'rgba(43, 76, 111, 0.9)',
                    'rgba(237, 67, 55, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Regional Distribution of Opinions'
                }
            }
        }
    });

    // Timeline Chart
    const timelineCtx = document.getElementById('timelineChart').getContext('2d');
    new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['Jan 2022', 'Apr 2022', 'Jul 2022', 'Oct 2022', 'Jan 2023', 'Apr 2023'],
            datasets: [{
                label: 'No territorial concessions',
                data: [82, 84, 87, 85, 87, 84],
                borderColor: 'rgba(43, 76, 111, 0.8)',
                backgroundColor: 'rgba(43, 76, 111, 0.1)',
                fill: true
            }, {
                label: 'May give up territories',
                data: [10, 10, 8, 8, 9, 10],
                borderColor: 'rgba(237, 67, 55, 0.8)',
                backgroundColor: 'rgba(237, 67, 55, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Evolution of Attitudes Toward Territorial Concessions'
                },
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'xy'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                }
            }
        }
    });

    // Add initialization for territorial-compromises-chart
    const territorialCompromisesChart = new Chart(
        document.getElementById('territorial-compromises-chart'),
        {
            type: 'bar',
            data: territorialCompromisesData,
            options: {
                // ... existing options ...
            }
        }
    );

    // Add initialization for territorial-concessions-timeline-chart
    const territorialConcessionsTimelineChart = new Chart(
        document.getElementById('territorial-concessions-timeline-chart'),
        {
            type: 'line',
            data: territorialConcessionsTimelineData,
            options: {
                // ... existing options ...
            }
        }
    );

    // Add initialization for territorial-scenarios-chart
    const territorialScenariosChart = new Chart(
        document.getElementById('territorial-scenarios-chart'),
        {
            type: 'bar',
            data: territorialScenariosData,
            options: {
                // ... existing options ...
            }
        }
    );
}; 