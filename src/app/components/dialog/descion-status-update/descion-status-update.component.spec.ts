import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescionStatusUpdateComponent } from './descion-status-update.component';

describe('DescionStatusUpdateComponent', () => {
  let component: DescionStatusUpdateComponent;
  let fixture: ComponentFixture<DescionStatusUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescionStatusUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescionStatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
