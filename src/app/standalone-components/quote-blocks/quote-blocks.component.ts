import { Component } from '@angular/core';
import { QuoteComponent } from '../quote/quote.component';
import { trigger } from '@angular/animations';
@Component({
  selector: 'app-quote-blocks',
  standalone: true,
  imports: [QuoteComponent],
  templateUrl: './quote-blocks.component.html',
  styleUrl: './quote-blocks.component.css',
  animations: [
    trigger('swiped', [
      
    ])
  ]
})
export class QuoteBlocksComponent {
  quotesYousef: string[] = ["The Mathematician", "My favorite Masry Canadian", "Megamind 2.0"]

  moveNext() {

  }
}
