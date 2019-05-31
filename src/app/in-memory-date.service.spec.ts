import { TestBed } from '@angular/core/testing';

import { InMemoryDateService } from './in-memory-date.service';

describe('InMemoryDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDateService = TestBed.get(InMemoryDateService);
    expect(service).toBeTruthy();
  });
});
