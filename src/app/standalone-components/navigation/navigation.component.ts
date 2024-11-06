import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {ProjectsDescriptionComponent} from "../projectDescription/projects-description/projects-description.component"
import { ActivatedRoute, Router } from '@angular/router';
import { MiscService } from '../../shared-services/misc.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
 
})
export class NavigationComponent implements AfterViewInit {
  // @ViewChild("project") project!: ElementRef
  constructor(private router: Router, private route: ActivatedRoute, private misc: MiscService) {}
  ngAfterViewInit(): void {
  }
  scrollTo(fragment: string) {
    this.misc.getFragments().forEach((obj) => {
      if (obj.fragment == fragment) {
        obj.el.nativeElement.scrollIntoView({behavior:"smooth"})
      }
    })
    // this.router.navigate(["/"], {fragment: fragment})
  }

  // ng
}
