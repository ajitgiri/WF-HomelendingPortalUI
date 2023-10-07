import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResolutionStepsComponent } from './view-resolution-steps.component';

describe('ViewResolutionStepsComponent', () => {
  let component: ViewResolutionStepsComponent;
  let fixture: ComponentFixture<ViewResolutionStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewResolutionStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolutionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
