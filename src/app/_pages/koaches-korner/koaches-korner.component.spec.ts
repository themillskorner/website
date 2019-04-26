import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoachesKornerComponent } from './koaches-korner.component';

describe('KoachesKornerComponent', () => {
  let component: KoachesKornerComponent;
  let fixture: ComponentFixture<KoachesKornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoachesKornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoachesKornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
