import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardFailedEvaluationComponent } from './hazard-failed-evaluation.component';

describe('HazardFailedEvaluationComponent', () => {
  let component: HazardFailedEvaluationComponent;
  let fixture: ComponentFixture<HazardFailedEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardFailedEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardFailedEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
