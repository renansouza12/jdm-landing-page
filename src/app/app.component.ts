import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { CommunityComponent } from './components/community/community.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeroComponent,AboutComponent,CommunityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jdm';
}
