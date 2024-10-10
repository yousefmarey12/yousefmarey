import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() isClickedOut = new EventEmitter<boolean>()
  isClicked: boolean = false

  toggleEvent() {
    this.isClicked = !this.isClicked
    this.isClickedOut.next(this.isClicked)
  }
}
