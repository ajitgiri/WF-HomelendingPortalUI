import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardHomeOwnerDeclarationsComponent } from './hazard-home-owner-declarations.component';

describe('HazardHomeOwnerDeclarationsComponent', () => {
  let component: HazardHomeOwnerDeclarationsComponent;
  let fixture: ComponentFixture<HazardHomeOwnerDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardHomeOwnerDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardHomeOwnerDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
