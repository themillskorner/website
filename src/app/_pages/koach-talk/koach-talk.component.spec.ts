import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoachTalkComponent } from './koach-talk.component';

describe('KoachTalkComponent', () => {
  let component: KoachTalkComponent;
  let fixture: ComponentFixture<KoachTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoachTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoachTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
