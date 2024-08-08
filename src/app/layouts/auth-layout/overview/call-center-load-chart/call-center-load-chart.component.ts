import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import Chart from 'chart.js/auto';


@Component({
  selector: 'app-call-center-load-chart',
  standalone: true,
  imports: [],
  templateUrl: './call-center-load-chart.component.html',
  styleUrl: './call-center-load-chart.component.scss'
})
export class CallCenterLoadChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  ngAfterViewInit(): void {
    new Chart(this.myChart.nativeElement, {
      type: 'line', // Chart type
      data: {
        labels: ['Jun 06', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15'],
        datasets: [
          {
            label: 'Fact',
            data: [10000, 10000, 23000, 24000, 25000, 37000, 42000, 42000, 43000, 47000, 51000, 51000, 53000, 54000, 59000, 60000, 62000, 63000,], // Replace with actual data
            borderColor: '#E16449', // Adjust colors as needed
            fill: true,
            tension: 0.4,
            backgroundColor: '#e165490e',
          },
          {
            label: 'Forecast',
            data: [5000, 20000, 34000, 32000, 19000, 26000, 17000, 19900, 15000, 25000, 38000, 30000, 42000, 47000, 490000, 42000, 50000, 51000, 47000], // Replace with actual data
            borderColor: 'orange', // Adjust colors as needed
            fill: false,
            borderDash: [1], // Dashed line for forecast
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: true, // Allow the chart to adjust its aspect ratio
        
        scales: {
          x: {
            grid: {
              display: false // Remove x-axis grid lines
            },
            ticks: {
              font: {
                size: 12,
                family: 'Satoshi-Regular' // Adjust font color and size
              }
            }
          },
          y: {
            
            grid: {
              display: true // Remove x-axis grid lines
            },
            beginAtZero: true,
            ticks: {
              font: {
                size: 12,
                family: 'Satoshi-Regular'// Adjust font color and size
              }
            },
            max: 60000
          }
        },
        plugins: {
          
          legend: {
            
            position: 'top',
            align: 'end',
            labels: {
              font: {
                size: 12,
                family: 'Satoshi-Regular' // Adjust font color and size
              },
              generateLabels: function(chart) {
                // Get the default legend items
                const original = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                // Modify the legend items
                return original.map(label => {
                    // Set the dot size and color
                    label.pointStyle = 'circle';
                    label.borderRadius = 5; // Size of the dot
                    return label;
                });
            }
            },
            
          },
          title: {
            display: true,
            text: 'Call Center Load',
            position: 'top',
            align: 'start',
            font:{
              size: 18,
              family: 'Satoshi-Regular',
              weight: 'bold'
            },
            
          },
        }
      }
    });
  }

}
