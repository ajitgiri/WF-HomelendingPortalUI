import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysExceptionCustomColapsTableComponent } from './sys-exception-custom-colaps-table.component';

describe('SysExceptionCustomColapsTableComponent', () => {
  let component: SysExceptionCustomColapsTableComponent;
  let fixture: ComponentFixture<SysExceptionCustomColapsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysExceptionCustomColapsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysExceptionCustomColapsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
