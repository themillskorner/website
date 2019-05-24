import { TestBed } from '@angular/core/testing';

import { KontactService } from './kontact.service';

describe('KontactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KontactService = TestBed.get(KontactService);
    expect(service).toBeTruthy();
  });
});
