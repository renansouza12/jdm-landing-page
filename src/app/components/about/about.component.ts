import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { animateImages, animateSubtitle, animateTitle } from '../../animations/gsap-animations';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{

  protected firstImage:string = "images/about-images1.jpg";
  protected secondImage:string = "images/about-images2.jpg";

  ngOnInit(): void {
    animateTitle(".title")
    animateSubtitle(".subtitle");
    animateImages(".image")
  }
}
