import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedWrapperComponent } from './embed-wrapper.component';

describe('EmbedWrapperComponent', () => {
  let component: EmbedWrapperComponent;
  let fixture: ComponentFixture<EmbedWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
