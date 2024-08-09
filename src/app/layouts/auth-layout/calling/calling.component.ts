import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AudioPlayerComponent } from "../../../components/common/audio-player/audio-player.component";
import { CustomerInfoComponent } from "./customer-info/customer-info.component";
import { AudioTranscriptionComponent } from "./audio-transcription/audio-transcription.component";
import { ConversationComponent } from "./conversation/conversation.component";

@Component({
  selector: 'app-calling',
  standalone: true,
  imports: [CommonModule, AudioPlayerComponent, CustomerInfoComponent, AudioTranscriptionComponent, ConversationComponent],
  templateUrl: './calling.component.html',
  styleUrl: './calling.component.scss'
})
export class CallingComponent {
  
  // 
}
