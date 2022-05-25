import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestListComponent } from './get-request-list.component';

describe('GetRequestListComponent', () => {
  let component: GetRequestListComponent;
  let fixture: ComponentFixture<GetRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
