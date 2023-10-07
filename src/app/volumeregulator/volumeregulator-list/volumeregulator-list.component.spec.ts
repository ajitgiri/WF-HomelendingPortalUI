import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeregulatorListComponent } from './volumeregulator-list.component';

describe('VolumeregulatorListComponent', () => {
  let component: VolumeregulatorListComponent;
  let fixture: ComponentFixture<VolumeregulatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeregulatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeregulatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
