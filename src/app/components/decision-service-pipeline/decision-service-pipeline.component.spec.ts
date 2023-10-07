import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionServicePipelineComponent } from './decision-service-pipeline.component';

describe('DecisionServicePipelineComponent', () => {
  let component: DecisionServicePipelineComponent;
  let fixture: ComponentFixture<DecisionServicePipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecisionServicePipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionServicePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
