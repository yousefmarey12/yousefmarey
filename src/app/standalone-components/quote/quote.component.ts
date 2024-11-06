import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  @Input() text!: string
  @Input() id!: number
  @Output() onSwitchQuote = new EventEmitter<boolean>();

  shiftRight() {
    this.onSwitchQuote.next(true)
  }

  shiftLeft() {
    this.onSwitchQuote.next(false)
  }
}
