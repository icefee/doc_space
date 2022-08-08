import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeTvosEventHandlerComponent } from './react-native-tvos-event-handler.component';

describe('ReactNativeTvosEventHandlerComponent', () => {
  let component: ReactNativeTvosEventHandlerComponent;
  let fixture: ComponentFixture<ReactNativeTvosEventHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactNativeTvosEventHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNativeTvosEventHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
