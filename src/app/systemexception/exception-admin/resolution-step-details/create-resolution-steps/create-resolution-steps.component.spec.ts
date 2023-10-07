import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResolutionStepsComponent } from './create-resolution-steps.component';

describe('CreateResolutionStepsComponent', () => {
  let component: CreateResolutionStepsComponent;
  let fixture: ComponentFixture<CreateResolutionStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResolutionStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResolutionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
