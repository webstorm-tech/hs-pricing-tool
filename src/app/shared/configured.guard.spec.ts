import { TestBed } from '@angular/core/testing';
import { ConfiguredGuard } from './configured.guard';
import { ConfigurationService } from './configuration.service';
import { Router } from '@angular/router';

describe('ConfiguredGuard', () => {
  let guard: ConfiguredGuard;
  let serviceStub: Partial<ConfigurationService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']);
    serviceStub = {};
    guard = new ConfiguredGuard(serviceStub as ConfigurationService, routerSpy);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
