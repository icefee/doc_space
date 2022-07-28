import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarHookComponent } from './snackbar-hook.component';

describe('SnackbarHookComponent', () => {
  let component: SnackbarHookComponent;
  let fixture: ComponentFixture<SnackbarHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
