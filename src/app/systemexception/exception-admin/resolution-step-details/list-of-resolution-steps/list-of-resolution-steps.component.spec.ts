import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfResolutionStepsComponent } from './list-of-resolution-steps.component';

describe('ListOfResolutionStepsComponent', () => {
  let component: ListOfResolutionStepsComponent;
  let fixture: ComponentFixture<ListOfResolutionStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfResolutionStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfResolutionStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
