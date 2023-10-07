import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardNotesComentsComponent } from './hazard-notes-coments.component';

describe('HazardNotesComentsComponent', () => {
  let component: HazardNotesComentsComponent;
  let fixture: ComponentFixture<HazardNotesComentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardNotesComentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardNotesComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
