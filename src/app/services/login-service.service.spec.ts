import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service.service';

describe('LoginServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServiceService = TestBed.get(LoginServiceService);
    expect(service).toBeTruthy();
  });
});
