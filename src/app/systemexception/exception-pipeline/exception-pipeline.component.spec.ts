import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionPipelineComponent } from './exception-pipeline.component';

describe('ExceptionPipelineComponent', () => {
  let component: ExceptionPipelineComponent;
  let fixture: ComponentFixture<ExceptionPipelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionPipelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
