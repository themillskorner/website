import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSafetyComponent } from './child-safety.component';

describe('ChildSafetyComponent', () => {
  let component: ChildSafetyComponent;
  let fixture: ComponentFixture<ChildSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
