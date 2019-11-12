import { TestBed } from '@angular/core/testing';

import { LocaisService } from './locais.service';

describe('LocaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaisService = TestBed.get(LocaisService);
    expect(service).toBeTruthy();
  });
});
