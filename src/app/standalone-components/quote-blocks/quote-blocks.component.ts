import { AfterViewInit, Component, OnInit, Output, ViewChild, viewChild } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { SwipeDirective } from '../../shared-directives/swipe.directive';
@Component({
  selector: 'app-quote-blocks',
  standalone: true,
  imports: [CommonModule, QuoteComponent, SwipeDirective],
  templateUrl: './quote-blocks.component.html',
  styleUrl: './quote-blocks.component.css',
  animations: [
    trigger('enterExit', [
     
      // Swipe left: Right to left
      transition(':increment', [
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'translateX(-100%) scale(0.8)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
          ]),
          query(':leave', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(100%) scale(0.8)' })),
          ]),
        ]),
      ]),
      // Swipe right: Left to right
      transition(':decrement', [
        group([
          query(':enter', [
            style({ opacity: 0, transform: 'scale(0.8)' }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
          ]),
          query(':leave', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translate(-100%) scale(0.8)' })),
          ]),
        ]),
      ]),
    ]),
    trigger('inner', [
      state('middle', style({opacity: 1})),
      state('right', style({opacity: 1})),
      state('left', style({opacity: 1})),
      transition(':increment', [
        group([
          query('.position-absolute', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(50%)' })),
          ]),
          query('.col:nth-child(1)', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-50%)' })),
          ]),
        ]),
      ]),
      // Swipe right: Left to right
      transition(':decrement', [
        group([
          query('.position-absolute', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-50%)' })),
          ]),
          query('.col:nth-child(2)', [
            animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(50%)' })),
          ]),
        ]),
      ]),
    ]),
    trigger('container', [
      transition(':enter, :leave', [
        query('@*', animateChild()),
      ]),
    ]),
  ]
})
export class QuoteBlocksComponent implements OnInit, AfterViewInit {
  quotesYousef: string[] = ["The Mathematician", "My favorite Masry Canadian", "Megamind 2.0", "Hello Stampy"]
  visibleQuotes: string[] = [];
  currentIndex: number = 1; // This tracks the start of the 3-element window
  currentNum: number = 0
  @ViewChild(SwipeDirective) swipeDirective!: SwipeDirective
  ngOnInit() {
   
    this.updateVisibleQuotes();
  }

  ngAfterViewInit(): void {
    this.swipeDirective.next.subscribe(() => {
      this.shiftArr(this.quotesYousef, true)
    })
    this.swipeDirective.prev.subscribe(() => {
      this.shiftArr(this.quotesYousef, false)
    })
  }

   updateVisibleQuotes() {
    // Use slice to get the current 3 elements
    this.visibleQuotes = [
      this.quotesYousef[(this.currentIndex) % this.quotesYousef.length],
      this.quotesYousef[(this.currentIndex + 1) % this.quotesYousef.length],
      this.quotesYousef[(this.currentIndex + 2) % this.quotesYousef.length]
    ];
  }

  // Shift array logic when swiping
  shiftArr(arr: string[], forward: boolean) {
    if (forward) {
      // Swipe right: Move to the next set of 3 quotes
      console.log(this.currentNum)
      this.currentNum--
      this.currentIndex = (this.currentIndex + 1) % arr.length;
    } else {
      // Swipe left: Move to the previous set of 3 quotes
      console.log(this.currentNum)
      this.currentNum++
      this.currentIndex = (this.currentIndex - 1 + arr.length) % arr.length;
    }

    this.updateVisibleQuotes(); // Update the visible quotes after each swipe
  }


}
