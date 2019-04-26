import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcaaStandardsComponent } from './ncaa-standards.component';

describe('NcaaStandardsComponent', () => {
  let component: NcaaStandardsComponent;
  let fixture: ComponentFixture<NcaaStandardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcaaStandardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
