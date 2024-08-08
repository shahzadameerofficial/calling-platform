import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-call-entry',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-entry.component.html',
  styleUrl: './call-entry.component.scss'
})
export class CallEntryComponent {
@Input() entry:any | undefined
}
