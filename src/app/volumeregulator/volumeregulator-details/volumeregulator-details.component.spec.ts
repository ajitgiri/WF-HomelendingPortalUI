import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeregulatorDetailsComponent } from './volumeregulator-details.component';

describe('VolumeregulatorDetailsComponent', () => {
  let component: VolumeregulatorDetailsComponent;
  let fixture: ComponentFixture<VolumeregulatorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeregulatorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeregulatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
