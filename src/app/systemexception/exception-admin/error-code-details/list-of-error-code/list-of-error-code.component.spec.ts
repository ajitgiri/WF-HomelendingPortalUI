import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfErrorCodeComponent } from './list-of-error-code.component';

describe('ListOfErrorCodeComponent', () => {
  let component: ListOfErrorCodeComponent;
  let fixture: ComponentFixture<ListOfErrorCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfErrorCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfErrorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
