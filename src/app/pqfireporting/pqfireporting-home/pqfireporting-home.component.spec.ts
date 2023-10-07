import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqfireportingHomeComponent } from './pqfireporting-home.component';

describe('PqfireportingHomeComponent', () => {
  let component: PqfireportingHomeComponent;
  let fixture: ComponentFixture<PqfireportingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqfireportingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqfireportingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
