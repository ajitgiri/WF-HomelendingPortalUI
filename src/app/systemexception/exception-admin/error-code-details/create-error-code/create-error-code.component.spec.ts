import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateErrorCodeComponent } from './create-error-code.component';

describe('CreateErrorCodeComponent', () => {
  let component: CreateErrorCodeComponent;
  let fixture: ComponentFixture<CreateErrorCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateErrorCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateErrorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
