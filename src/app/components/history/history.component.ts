import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [NgOptimizedImage],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  protected videoR35:string = "video/history/r35-video.mp4";
  protected supraVideo:string = "video/history/supra.mp4";
}
