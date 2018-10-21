import { TestBed } from '@angular/core/testing';

import { StockServiceService } from './stock-service.service';

describe('StockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockService = TestBed.get(StockServiceService);
    expect(service).toBeTruthy();
  });
});
