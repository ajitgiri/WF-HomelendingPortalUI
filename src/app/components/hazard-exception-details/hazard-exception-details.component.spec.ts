import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardExceptionDetailsComponent } from './hazard-exception-details.component';

describe('HazardExceptionDetailsComponent', () => {
  let component: HazardExceptionDetailsComponent;
  let fixture: ComponentFixture<HazardExceptionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardExceptionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardExceptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
