import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgCircleProgressModule, CircleProgressOptions  } from 'ng-circle-progress';

@Component({
  selector: 'app-circle-progress',
  standalone: true,
  imports: [CommonModule, NgCircleProgressModule],
  templateUrl: './circle-progress.component.html',
  styleUrl: './circle-progress.component.scss',
  providers: [
    {
      provide: CircleProgressOptions,
      useValue: {
        radius: 50,
        outerStrokeWidth: 5,
        outerStrokeColor: '#3498db',
        animation: true,
        animationDuration: 300
      }
    }
  ]
})
export class CircleProgressComponent {
  @Input() max: number | undefined = undefined
  @Input() radius: number | undefined = undefined
  @Input() stroke: number | undefined = undefined
  @Input() current: any | undefined = undefined;
  rating: any = parseInt(this.current)
}
