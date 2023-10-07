import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdmsHomeComponent } from './rdms-home.component';

describe('RdmsHomeComponent', () => {
  let component: RdmsHomeComponent;
  let fixture: ComponentFixture<RdmsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdmsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
