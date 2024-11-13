import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { MiscService } from '../../../shared-services/misc.service';
import { Skills } from '../../../shared-interfaces/skills.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialComponent, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements AfterViewInit, OnInit {
  arr: Skills[] = []
  constructor(private misc: MiscService) {}
  ngOnInit(): void {
    this.arr = this.misc.getSkills()
  }
  ngAfterViewInit(): void {
    this.misc.setFragments("testimonials", this.testimonials)
  }
  @ViewChild('testimonials', { static: false }) testimonials!: ElementRef;
}
