import { CommonModule, NgIfContext } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FitnessIconComponent } from '../../../icons/fitness/fitness.component';
import { ConsultComponent } from '../../../icons/consult/consult.component';
import { CollabComponent } from '../../../icons/collab/collab.component';
import { ResumeComponent } from '../../../icons/resume/resume.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, FitnessIconComponent, ConsultComponent, CollabComponent, ResumeComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
  animations: [
    trigger("hover", [
      state("min", style({
        boxShadow: '2px 4px 4px 3px var(--secondary-tont, #E5FCF5)',
        transform: 'translateY(-8px)',
      })), 
      state("mout", style({
        boxShadow: '2px 2px 4px 1px var(--secondary-tont, #E5FCF5)',
        transform: 'translateY(8px)',
      })),
      transition('min <=> mout', [animate(500)])
    ])
  ]
})
export class OfferComponent implements OnInit {
  href!: string
  download!: string
  ngOnInit(): void {
    if (this.icon == 'Collab') {
        this.href = 'https://wa.me/20109948563'
        this.download = ''
    }
    else {
      if (this.icon == 'Resume') {
        this.href = "/yousefresume.pdf"
        this.download = 'yousefresume.pdf'
      }
      else {
        this.href = "https://fitnesshub-ai.com/ar/home"
        this.download = ''
      }
    }
  }
  @Input() offerText: string = "Book a consultation"
  @Input() icon: string = "Collab"
  IsIn: string = ''

  setIn() {
    this.IsIn = "min"
  }

  setOut() {
    this.IsIn = "mout"
  }

}
