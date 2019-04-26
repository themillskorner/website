import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingOfAMentorComponent } from './making-of-a-mentor.component';

describe('MakingOfAMentorComponent', () => {
  let component: MakingOfAMentorComponent;
  let fixture: ComponentFixture<MakingOfAMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingOfAMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingOfAMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
