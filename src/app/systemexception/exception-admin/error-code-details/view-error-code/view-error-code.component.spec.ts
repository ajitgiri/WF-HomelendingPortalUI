import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewErrorCodeComponent } from './view-error-code.component';

describe('ViewErrorCodeComponent', () => {
  let component: ViewErrorCodeComponent;
  let fixture: ComponentFixture<ViewErrorCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewErrorCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewErrorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
