import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-call-center-load-chart',
  standalone: true,
  imports: [],
  templateUrl: './call-center-load-chart.component.html',
  styleUrls: ['./call-center-load-chart.component.scss']
})
export class CallCenterLoadChartComponent implements AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    new Chart(this.myChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jun 06', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15'],
        datasets: [
          {
            label: 'Fact',
            data: [10000, 10000, 23000, 24000, 25000, 37000, 42000, 42000, 43000, 47000, 51000, 51000, 53000, 54000, 59000, 60000, 62000, 63000],
            borderColor: '#F76D47',
            fill: true,
            tension: 0.4,
            backgroundColor: '#F76D4710', // Slight fill color with transparency
            borderWidth: 1, // Thinner line
            pointRadius: 0,
          },
          {
            label: 'Forecast',
            data: [5000, 20000, 34000, 32000, 19000, 26000, 17000, 19900, 15000, 25000, 38000, 30000, 42000, 47000, 49000, 42000, 50000, 51000, 47000],
            borderColor: '#F76D47',
            fill: true,
            borderDash: [5, 3], // Tighter dashed line
            tension: 0.4,
            backgroundColor: '#F76D4710', // Slight fill color with transparency
            borderWidth: 1, // Thinner line
            pointRadius: 0,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12,
                family: 'Satoshi-Regular'
              }
            }
          },
          y: {
            grid: {
              display: true,
              color: '#e0e0e0',
            },
            beginAtZero: true,
            ticks: {
              font: {
                size: 12,
                family: 'Satoshi-Regular'
              },
              callback: function(value) {
                return value + 'k'; // Add 'k' suffix for thousands
              },
              padding: 10, // Adds space between label and grid line
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
                family: 'Satoshi-Regular'
              },
              generateLabels: function(chart) {
                const original = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                return original.map(label => {
                  label.pointStyle = 'circle';
                  label.borderRadius = 5;
                  return label;
                });
              }
            },
          },
          title: {
            display: true,
            text: 'Call Center Load', // Icon in the title
            position: 'top',
            align: 'start',
            font: {
              size: 18,
              family: 'Satoshi-Regular',
              weight: 'bold'
            },
            padding: {
              top: 5,
              bottom: 5
            }
          }
        }
      }
    });
  }
}
