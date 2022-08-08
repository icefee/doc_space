import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldMessageMaterialBannerComponent } from './scaffold-message-material-banner.component';

describe('ScaffoldMessageMaterialBannerComponent', () => {
  let component: ScaffoldMessageMaterialBannerComponent;
  let fixture: ComponentFixture<ScaffoldMessageMaterialBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaffoldMessageMaterialBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldMessageMaterialBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
