import { TestBed } from '@angular/core/testing';

import { MarketStatusService } from './market-status.service';

describe('MarketStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketStatusService = TestBed.get(MarketStatusService);
    expect(service).toBeTruthy();
  });
});
