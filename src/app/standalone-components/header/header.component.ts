import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MiscService } from '../../shared-services/misc.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() isClickedOut = new EventEmitter<boolean>()
  isClicked: boolean = false
  misc = inject(MiscService)

  scrollTo(fragment: string) {
    this.misc.getFragments().forEach((obj) => {
      if (obj.fragment == fragment) {
        obj.el.nativeElement.scrollIntoView({behavior:"smooth"})
      }
    })
    // this.router.navigate(["/"], {fragment: fragment})
  }

  toggleEvent() {
    this.isClicked = !this.isClicked
    this.isClickedOut.next(this.isClicked)
  }
}
