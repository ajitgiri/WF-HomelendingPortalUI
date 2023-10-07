import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardHomeComponent } from './hazard-home.component';

describe('HazardHomeComponent', () => {
  let component: HazardHomeComponent;
  let fixture: ComponentFixture<HazardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
