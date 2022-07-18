import { TestBed } from '@angular/core/testing';

import { ConfiguredGuard } from './configured.guard';

describe('ConfiguredGuard', () => {
  let guard: ConfiguredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfiguredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
