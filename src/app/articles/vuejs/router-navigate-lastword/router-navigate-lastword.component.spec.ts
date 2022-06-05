import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavigateLastwordComponent } from './router-navigate-lastword.component';

describe('RouterNavigateLastwordComponent', () => {
  let component: RouterNavigateLastwordComponent;
  let fixture: ComponentFixture<RouterNavigateLastwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterNavigateLastwordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterNavigateLastwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
