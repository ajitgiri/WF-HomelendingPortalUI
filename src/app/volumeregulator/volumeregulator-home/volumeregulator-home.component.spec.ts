import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeregulatorHomeComponent } from './volumeregulator-home.component';

describe('VolumeregulatorHomeComponent', () => {
  let component: VolumeregulatorHomeComponent;
  let fixture: ComponentFixture<VolumeregulatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeregulatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeregulatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
