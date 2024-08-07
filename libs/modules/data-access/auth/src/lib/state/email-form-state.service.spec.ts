import { TestBed } from '@angular/core/testing';

import { EmailFormStateService } from './email-form-state.service';

describe('EmailFormStateService', () => {
  let service: EmailFormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailFormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize email with an empty string', () => {
    expect(service.email()).toBe('');
  });

  it('should update the email correctly', () => {
    const testEmail = 'test@example.com';
    service.setEmail(testEmail);
    expect(service.email()).toBe(testEmail);
  });

  it('should return the email as readonly', () => {
    const testEmail = 'readonly@example.com';
    service.setEmail(testEmail);
    const emailSignal = service.email;
    expect(emailSignal).toBeDefined();
    expect(emailSignal()).toBe(testEmail);
  });
});
