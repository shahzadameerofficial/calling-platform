import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';


@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.scss'
})
export class AudioPlayerComponent implements OnInit, OnDestroy, AfterViewInit {
  wavesurfer: WaveSurfer | undefined;
  getColor() { }
  @ViewChild('che') che!: ElementRef<HTMLDivElement>;
  playState: Boolean = false

  constructor() { }
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      let wavcolor = 'black';
      let progcolor = '#E16449';

      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && savedTheme === 'dark') {
        wavcolor = '#E16449';
        progcolor = '#888888'
      } 
      this.wavesurfer = WaveSurfer.create({
        container: this.che.nativeElement,
        waveColor: wavcolor,
        progressColor: progcolor,
        height: 100,
        barWidth: 3,
        cursorWidth: 1
      });
      this.wavesurfer.load('assets/YPHYAG.mp3');
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.wavesurfer) {
      this.wavesurfer.destroy();
    }
  }

  playPause(): void {
    if (this.wavesurfer) {
      this.wavesurfer.playPause();
      this.playState = !this.playState
    }
  }
  formatTime(seconds: any) {
    if (isNaN(seconds) || seconds < 0) {
      throw new Error("Invalid input: seconds must be a non-negative number.");
    }

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
