import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { animateImages, animateTitle } from '../../animations/gsap-animations';


@Component({
  selector: 'app-community',
  imports: [NgOptimizedImage],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent implements OnInit {
  
  protected video:string = "video/community/cars-video.mp4";
  protected firstImage:string = "images/community/first-community-image.jpg"
  protected secondImage:string = "images/community/second-community-image.jpg"

  ngOnInit(): void {
    animateTitle(".community_title");
    animateImages(".community_image")
  }

}
