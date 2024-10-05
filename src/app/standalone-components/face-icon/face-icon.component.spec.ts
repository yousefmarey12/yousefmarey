import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceIconComponent } from './face-icon.component';

describe('FaceIconComponent', () => {
  let component: FaceIconComponent;
  let fixture: ComponentFixture<FaceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
