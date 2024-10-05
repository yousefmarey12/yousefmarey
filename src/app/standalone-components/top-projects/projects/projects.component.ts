import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
 
}
