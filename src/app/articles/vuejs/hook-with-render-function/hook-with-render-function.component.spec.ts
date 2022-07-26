import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookWithRenderFunctionComponent } from './hook-with-render-function.component';

describe('HookWithRenderFunctionComponent', () => {
  let component: HookWithRenderFunctionComponent;
  let fixture: ComponentFixture<HookWithRenderFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookWithRenderFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HookWithRenderFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
