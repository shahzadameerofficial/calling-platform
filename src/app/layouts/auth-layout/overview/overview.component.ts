import { Component } from '@angular/core';
import { CircleProgressComponent } from '../../../components/common/circle-progress/circle-progress.component';
import { CallEntryComponent } from "../../../components/common/call-entry/call-entry.component";
import { CallCenterLoadChartComponent } from './call-center-load-chart/call-center-load-chart.component';


@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CircleProgressComponent, CallEntryComponent, CallCenterLoadChartComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  activeCall = [
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'failed',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'failed',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
    {
      status: 'success',
      name: 'Jane Cooper',
      id: '#1234'
    },
  ]
}
