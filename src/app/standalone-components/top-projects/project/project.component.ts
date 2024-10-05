import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  animations: [
    trigger('hover', [
      state('mouseenter', style({
        transform: 'translateY(-25px)',
        opacity: 0.6,
        boxShadow: '0px 10px 4px 0px #E5FCF5',
      })),
      state('mouseleave', style({
        transform: 'translateY(0)',
        opacity: 1,
        boxShadow: '0px',
      })),
      transition('mouseleave <=> mouseenter', animate('0.5s')),
    ]),
    trigger('textHover', [
      state('mouseenter', style({
        transform: 'translateY(-30px)',
        opacity: 1,  // Keep opacity 1 for the text
      })),
      state('mouseleave', style({
        transform: 'translateY(0)',
        opacity: 0,  // The text fades out when not hovered
      })),
      transition('mouseleave <=> mouseenter', animate('0.5s')),
    ]),
  ]
})
export class ProjectComponent {
  @Input() projectTitle: string = 'FitnessHub';
  currentState: string = 'mouseleave';

  setMouseEnter() {
    this.currentState = 'mouseenter';
  }
  setMouseLeave() {
    this.currentState = 'mouseleave';
  }
}