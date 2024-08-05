import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { signal } from '@angular/core';
import { EmailFormStateService } from '@ecommerce/auth-data-access';
import { faker } from '@faker-js/faker';
import { passwordGuard } from './password.guard';

describe('passwordGuard', () => {
  it('should return false when email is not set', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(EmailFormStateService, {
      useValue: { email: signal('') },
    });

    const activateNextStep = TestBed.runInInjectionContext(passwordGuard());
    expect(activateNextStep).toBe(false);
  });

  it('should return true when email is set', () => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });

    TestBed.overrideProvider(EmailFormStateService, {
      useValue: { email: signal(faker.internet.email()) },
    });

    const guard = TestBed.runInInjectionContext(passwordGuard());
    expect(guard).toBe(true);
  });
});
