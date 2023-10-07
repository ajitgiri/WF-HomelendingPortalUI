import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardLoanInformationsComponent } from './hazard-loan-informations.component';

describe('HazardLoanInformationsComponent', () => {
  let component: HazardLoanInformationsComponent;
  let fixture: ComponentFixture<HazardLoanInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardLoanInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardLoanInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
