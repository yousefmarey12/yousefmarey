import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ProjectsDescriptionComponent } from '../standalone-components/projectDescription/projects-description/projects-description.component';
@Directive({
  selector: '[appNavigations]',
  standalone: true
})
export class NavigationsDirective {

  constructor(private el: ElementRef, private renderer: Renderer2, private projects: ProjectsDescriptionComponent) { }
 
  scrollTo() {
    this.el.nativeElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }


}
