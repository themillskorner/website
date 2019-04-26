import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleticYouthEmpowermentComponent } from './athletic-youth-empowerment.component';

describe('AthleticYouthEmpowermentComponent', () => {
  let component: AthleticYouthEmpowermentComponent;
  let fixture: ComponentFixture<AthleticYouthEmpowermentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleticYouthEmpowermentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticYouthEmpowermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
