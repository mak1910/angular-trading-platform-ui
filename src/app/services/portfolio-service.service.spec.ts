import { TestBed } from '@angular/core/testing';

import { PortfolioServiceService } from './portfolio-service.service';

describe('PortfolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfolioServiceService = TestBed.get(PortfolioServiceService);
    expect(service).toBeTruthy();
  });
});
