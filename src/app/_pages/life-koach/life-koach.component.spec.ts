import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeKoachComponent } from './life-koach.component';

describe('LifeKoachComponent', () => {
  let component: LifeKoachComponent;
  let fixture: ComponentFixture<LifeKoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeKoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeKoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
