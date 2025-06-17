import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LandingPageComponent } from './landing-page/landing-page.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-ai-builder-frontend';
}
