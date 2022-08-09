import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsAnimationTimingFunctionComponent } from './steps-animation-timing-function.component';

describe('StepsAnimationTimingFunctionComponent', () => {
  let component: StepsAnimationTimingFunctionComponent;
  let fixture: ComponentFixture<StepsAnimationTimingFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsAnimationTimingFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsAnimationTimingFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
