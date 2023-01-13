import { TestBed } from '@angular/core/testing';

import { CanDeactivateGuard } from './can-deactivate.guard';
import EnvironmentConfigService from './environment-config.service';

describe('CanDeactivateGuard', () => {
  let guard: CanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        providers: [{ provide: EnvironmentConfigService, useValue: {} }]
      }
    );
    guard = TestBed.inject(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
