import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { MiscService } from '../../../shared-services/misc.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  constructor(private misc: MiscService) {}
  ngAfterViewInit(): void {
    this.misc.setFragments("testimonials", this.testimonials)
  }
  @ViewChild('testimonials', { static: false }) testimonials!: ElementRef;
}
