import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExceptionHomeComponent } from './system-exception-home.component';

describe('SystemExceptionHomeComponent', () => {
  let component: SystemExceptionHomeComponent;
  let fixture: ComponentFixture<SystemExceptionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemExceptionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemExceptionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
