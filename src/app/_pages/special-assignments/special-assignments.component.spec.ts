import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAssignmentsComponent } from './special-assignments.component';

describe('SpecialAssignmentsComponent', () => {
  let component: SpecialAssignmentsComponent;
  let fixture: ComponentFixture<SpecialAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
