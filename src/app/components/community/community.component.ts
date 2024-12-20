import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  imports: [NgOptimizedImage],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {
  protected video:string = "video/community/cars-video.mp4";
  protected firstImage:string = "images/community/first-community-image.jpg"
  protected secondImage:string = "images/community/second-community-image.jpg"
  
}
