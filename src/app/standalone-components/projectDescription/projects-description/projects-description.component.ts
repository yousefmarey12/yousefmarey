import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProjectDescriptionComponent } from '../project-description/project-description.component';
import { MiscService } from '../../../shared-services/misc.service';
import { ProjectDescription } from '../../../shared-interfaces/project-description.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-description',
  standalone: true,
  imports: [ProjectDescriptionComponent, CommonModule],
  templateUrl: './projects-description.component.html',
  styleUrl: './projects-description.component.css'
})
export class ProjectsDescriptionComponent implements AfterViewInit, OnInit {
  constructor(private misc: MiscService) {}

  arrProjects: ProjectDescription[] = []
  ngOnInit(): void {
    this.arrProjects = this.misc.getProjectDescriptions()
    console.log(this.arrProjects)

  }
  ngAfterViewInit(): void {
    this.misc.setFragments("projects", this.project)
  }
  @ViewChild('project', { static: false }) project!: ElementRef;
  
  fitnessHubDescr: string = `2 bored students in their summer wanted to test an idea. Abdulmalik Alshammari and I have developed a web application that prompts the user to enter information on their body and goals such as height, age, weight, goal weight, etc. Using OpenAI's API, we have developed hundreds of dietary & fitness consultations in Arabic for Middle Eastern users, and we will not stop!`
  ui: string = `Designed and prototyped a UI for a Netflix-like application using UX techniques such as competitive analysis, user personas and UI concepts such as wireframing and prototyping`
}
