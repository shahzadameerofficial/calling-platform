import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RoundProgressComponent } from 'angular-svg-round-progressbar';

@Component({
  selector: 'app-circle-progress',
  standalone: true,
  imports: [CommonModule, RoundProgressComponent],
  templateUrl: './circle-progress.component.html',
  styleUrl: './circle-progress.component.scss'
})
export class CircleProgressComponent {
  @Input() max: number | undefined = undefined
  @Input() radius: number | undefined = undefined
  @Input() stroke: number | undefined = undefined
  @Input() current: any | undefined = undefined;
  rating: any = parseInt(this.current)
}
