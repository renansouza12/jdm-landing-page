import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { animateTitle } from '../../animations/gsap-animations';

@Component({
  selector: 'app-history',
  imports: [NgOptimizedImage],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  protected videoR35:string = "video/history/r35-video.mp4";
  protected supraVideo:string = "video/history/supra.mp4";


  ngOnInit(): void {
    animateTitle(".evo_title");
  }
}
