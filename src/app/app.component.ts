import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './standalone-components/header/header.component';
import { QuoteBlocksComponent } from './standalone-components/quote-blocks/quote-blocks.component';
import { FaceIconComponent } from './standalone-components/face-icon/face-icon.component';
import { ProjectsComponent } from './standalone-components/top-projects/projects/projects.component';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './standalone-components/navigation/navigation.component';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { ProjectsDescriptionComponent } from './standalone-components/projectDescription/projects-description/projects-description.component';
import { OffersComponent } from './standalone-components/resume/offers/offers.component';
import { TestimonialsComponent } from './standalone-components/testimonials/testimonials/testimonials.component';
import { FooterComponent } from './standalone-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, QuoteBlocksComponent, FaceIconComponent, ProjectsComponent, NavigationComponent, ProjectsDescriptionComponent, OffersComponent, TestimonialsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    
    trigger('enterLeave', [
      transition(':enter', [style({transform: 'translateX(-100%)', opacity: 1}), animate('400ms')]),
      transition(':leave', [animate('400ms',  keyframes([
        style({transform: 'translateX(-100%)', opacity: 0, offset: 1}),
      ]))])
    ])
  ]
})
export class AppComponent {
    isClicked = false;

    toggleIsClicked(evt: boolean) {
      console.log(evt)
      this.isClicked = evt
    }
}
