import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApplicationProfileComponent } from './create-application-profile.component';

describe('CreateApplicationProfileComponent', () => {
  let component: CreateApplicationProfileComponent;
  let fixture: ComponentFixture<CreateApplicationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateApplicationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateApplicationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
