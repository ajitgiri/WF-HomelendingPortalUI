import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpdateApplicationProfileComponent } from './view-update-application-profile.component';

describe('ViewUpdateApplicationProfileComponent', () => {
  let component: ViewUpdateApplicationProfileComponent;
  let fixture: ComponentFixture<ViewUpdateApplicationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpdateApplicationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpdateApplicationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
