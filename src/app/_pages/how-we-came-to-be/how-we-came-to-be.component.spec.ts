import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeCameToBeComponent } from './how-we-came-to-be.component';

describe('HowWeCameToBeComponent', () => {
  let component: HowWeCameToBeComponent;
  let fixture: ComponentFixture<HowWeCameToBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeCameToBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeCameToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
