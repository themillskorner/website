import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontactComponent } from './kontact.component';

describe('KontactComponent', () => {
  let component: KontactComponent;
  let fixture: ComponentFixture<KontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
