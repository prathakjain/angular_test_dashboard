import { TestBed } from '@angular/core/testing';

import { OnboardService } from './onboard.service';

describe('OnboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnboardService = TestBed.get(OnboardService);
    expect(service).toBeTruthy();
  });
});
