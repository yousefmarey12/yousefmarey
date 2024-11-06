import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDescriptionComponent } from './projects-description.component';

describe('ProjectsDescriptionComponent', () => {
  let component: ProjectsDescriptionComponent;
  let fixture: ComponentFixture<ProjectsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
