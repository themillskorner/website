import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNewsDetailComponent } from './general-news-detail.component';

describe('GeneralNewsDetailComponent', () => {
  let component: GeneralNewsDetailComponent;
  let fixture: ComponentFixture<GeneralNewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralNewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralNewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
