import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { signal } from '@angular/core';
import { EmailFormStateService } from '@ecommerce/auth-data-access';
import { authGuard } from './auth.guard';
import { faker } from '@faker-js/faker';

describe('authGuard', () => {
  it('should return true when user is not truthy', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(EmailFormStateService, {
      useValue: { email: signal('') },
    });

    const guardIsActivated = TestBed.runInInjectionContext(authGuard());
    expect(guardIsActivated).toBe(true);
  });

  it('should NOT return true when user is truthy', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(EmailFormStateService, {
      useValue: { email: signal(faker.internet.email()) },
    });

    const guard = TestBed.runInInjectionContext(authGuard());
    expect(guard).not.toBe(true);
  });
});
