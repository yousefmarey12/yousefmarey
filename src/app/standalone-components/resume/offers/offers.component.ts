import { Component, ElementRef, ViewChild } from '@angular/core';
import { OfferComponent } from '../offer/offer.component';
import { MiscService } from '../../../shared-services/misc.service';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [OfferComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private misc: MiscService) {}
  ngAfterViewInit(): void {
    this.misc.setFragments("resume", this.resume)
  }
  @ViewChild('resume', { static: false }) resume!: ElementRef;
}
