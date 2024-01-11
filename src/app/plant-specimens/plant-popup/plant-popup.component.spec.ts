import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantPopupComponent } from './plant-popup.component';

describe('PlantPopupComponent', () => {
  let component: PlantPopupComponent;
  let fixture: ComponentFixture<PlantPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantPopupComponent]
    });
    fixture = TestBed.createComponent(PlantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
