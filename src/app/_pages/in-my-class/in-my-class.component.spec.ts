import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMyClassComponent } from './in-my-class.component';

describe('InMyClassComponent', () => {
  let component: InMyClassComponent;
  let fixture: ComponentFixture<InMyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
