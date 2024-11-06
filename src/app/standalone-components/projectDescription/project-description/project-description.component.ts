import { animate, animateChild, query, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ProjectDescription } from '../../../shared-interfaces/project-description.interface';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.css',
  animations: [
    trigger('hover', [
      state('mouseenter', style({
        transform: 'translateY(-25px)',
      })),
      state('mouseleave', style({
        transform: 'translateY(0)',
      })),
      transition('mouseleave <=> mouseenter', [animate('0.3s'), query('@textHover', animateChild()), query('@buttonHover', animateChild())]),
      ]        
      
    ),
    trigger('buttonHover', [
      state('mouseenter', style({
        opacity: 0.7,
        boxShadow: '0px 10px 4px 0px #E5FCF5',
        filter: 'blur(4px)'
      })),
      state('mouseleave', style({
        opacity: 1,
        boxShadow: '0px',
        filter:'none'
      })),
      transition('mouseleave <=> mouseenter', animate('0.3s')),
    ]),
    trigger('textHover', [
      state('mouseenter', style({
        // boxShadow: '0px 10px 4px 0px #E5FCF5',
        opacity: 1,
      })),
      state('mouseleave', style({
        opacity: 0,
      })),
      transition('mouseleave <=> mouseenter', [animate('0.1s')]),
    ])
  ]
})

export class ProjectDescriptionComponent {
  @Input() project!: ProjectDescription
  currentState: string = 'mouseleave';
  setMouseEnter() {
    this.currentState = 'mouseenter';
  }
  setMouseLeave() {
    this.currentState = 'mouseleave';
  }

  getPhotoStyles(id: number) {
    return {
      'background': `url(../../../../../public/project${id}.png) lightgray 50% / cover no-repeat;`
    }
  }
}
