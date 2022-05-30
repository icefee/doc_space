import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInterceptorComponent } from './api-interceptor.component';

describe('ApiInterceptorComponent', () => {
  let component: ApiInterceptorComponent;
  let fixture: ComponentFixture<ApiInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInterceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
