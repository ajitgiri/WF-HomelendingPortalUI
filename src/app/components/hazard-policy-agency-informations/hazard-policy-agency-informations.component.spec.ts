import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardPolicyAgencyInformationsComponent } from './hazard-policy-agency-informations.component';

describe('HazardPolicyAgencyInformationsComponent', () => {
  let component: HazardPolicyAgencyInformationsComponent;
  let fixture: ComponentFixture<HazardPolicyAgencyInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardPolicyAgencyInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardPolicyAgencyInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
