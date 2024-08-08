import { Component } from '@angular/core';
import { CircleProgressComponent } from '../../../components/common/circle-progress/circle-progress.component';
import { CallEntryComponent } from "../../../components/common/call-entry/call-entry.component";
import { CallCenterLoadChartComponent } from './call-center-load-chart/call-center-load-chart.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CircleProgressComponent, CallEntryComponent, CallCenterLoadChartComponent, DragDropModule, FormsModule, CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  activeCall = [
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'failed', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'failed', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' }
  ];

  followUp = [
    { status: 'failed', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' },
    { status: 'success', name: 'Jane Cooper', id: '#1234', editing: false, newName: '' }
  ];
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      event.container.data[event.currentIndex].editing = true;
    }
  }

  updateTitle(item: any) {
    if (item.newName.trim()) {
      item.name = item.newName.trim();
    }
    item.editing = false;
  }

  handleKeyPress(event: KeyboardEvent, item: any) {
    if (event.key === 'Enter') {
      this.updateTitle(item);
    }
  }
}
