import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  @Input() title: string = "The Math Guy"
  @Input() description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat ex nisi, vitae iaculis nunc volutpat tincidunt. Aliquam ac elit eleifend, convallis urna eget, accumsan nulla. Ut eu mi sed ante posuere faucibus. Etiam consectetur erat placerat luctus aliquet. Sed consequat sem eu mauris hendrerit, viverra porta lectus volutpat. Pellentesque."
  @Input() urlClass!: string
}
