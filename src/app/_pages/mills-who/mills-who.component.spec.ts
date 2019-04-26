import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillsWhoComponent } from './mills-who.component';

describe('MillsWhoComponent', () => {
  let component: MillsWhoComponent;
  let fixture: ComponentFixture<MillsWhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillsWhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillsWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
