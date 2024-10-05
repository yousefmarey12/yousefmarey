import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './standalone-components/header/header.component';
import { QuoteBlocksComponent } from './standalone-components/quote-blocks/quote-blocks.component';
import { FaceIconComponent } from './standalone-components/face-icon/face-icon.component';
import { ProjectsComponent } from './standalone-components/top-projects/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, QuoteBlocksComponent, FaceIconComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
