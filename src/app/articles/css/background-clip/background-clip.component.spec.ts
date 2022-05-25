import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundClipComponent } from './background-clip.component';

describe('BackgroundClipComponent', () => {
  let component: BackgroundClipComponent;
  let fixture: ComponentFixture<BackgroundClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
