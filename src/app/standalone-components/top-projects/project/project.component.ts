import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  animations: [
    trigger('hover', [
      state('mouseenter', style({
        transform: 'translateY(-25px)',
      })),
      state('mouseleave', style({
        transform: 'translateY(0)',
      })),
      transition('mouseleave <=> mouseenter', [
        animate('0.3s'),
        query('@buttonHover', animateChild()),
        query('@textHover', animateChild())]),
      
    ]),
    trigger('buttonHover', [
      state('mouseenter', style({
        opacity: 0.6,
        boxShadow: '0px 10px 4px 0px #E5FCF5',
      })),
      state('mouseleave', style({
        opacity: 1,
        boxShadow: '0px',
      })),
      transition('mouseleave <=> mouseenter', animate('0.3s')),
    ]),
    trigger('textHover', [
      state('mouseenter', style({
        opacity: 1,
      })),
      state('mouseleave', style({
        opacity: 0,
      })),
      transition('mouseleave <=> mouseenter', [animate('0.1s')]),
    ])
  ]
})
export class ProjectComponent {
  @Input() projectTitle: string = 'FitnessHub';
  @Input() projectLink: string = 'https://www.figma.com/design/Nt1NYOAtkegTsxiPOZZ6cu/Figma-Book-Project?node-id=1-54&t=YiIEbi5yrxiP4bPS-1'
  currentState: string = 'mouseleave';

  setMouseEnter() {
    this.currentState = 'mouseenter';
  }
  setMouseLeave() {
    this.currentState = 'mouseleave';
  }
}