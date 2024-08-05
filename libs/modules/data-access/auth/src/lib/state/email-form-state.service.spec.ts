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
});
