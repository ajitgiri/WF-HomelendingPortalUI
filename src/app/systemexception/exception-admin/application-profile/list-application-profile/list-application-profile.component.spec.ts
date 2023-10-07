import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApplicationProfileComponent } from './list-application-profile.component';

describe('ListApplicationProfileComponent', () => {
  let component: ListApplicationProfileComponent;
  let fixture: ComponentFixture<ListApplicationProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApplicationProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApplicationProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
