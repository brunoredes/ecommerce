import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthFormEmailComponent } from './auth-form-email.component';
import { AuthFormComponent } from '../auth-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { faker } from '@faker-js/faker';
import { authFormRoutes } from '../../lib.routes';
import { EmailFormStateService } from '@ecommerce/auth-data-access';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;
  let mockEmailFormStateService: EmailFormStateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent, NoopAnimationsModule],
      providers: [
        AuthFormComponent,
        provideRouter(authFormRoutes),
        {
          provide: EmailFormStateService,
          useValue: { setEmail: (email: string) => jest.fn(() => email) },
        },
      ],
    }).compileComponents();

    mockEmailFormStateService = new EmailFormStateService();
    jest.spyOn(mockEmailFormStateService, 'setEmail');

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable "proximo" button when email is valid', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const button = element.querySelector('button');
      const input = element.querySelector('input') as HTMLInputElement;

      const validEmail = faker.internet.email({
        provider: 'mentoriaangularpro',
      });

      expect(button?.disabled).toBe(true);

      input.value = validEmail;
      input.dispatchEvent(new Event('input'));
      expect(button?.disabled).toBe(false);
    });
  });

  it('should button be disabled when no email is provided', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const button = element.querySelector('button');
      const input = element.querySelector('input') as HTMLInputElement;

      expect(button?.disabled).toBe(true);

      const invalidEmail = 'email@f,';
      input.value = invalidEmail;
      input.dispatchEvent(new Event('input'));
      expect(button?.disabled).toBe(true);
    });
  });

  it('should display required error message', () => {
    fixture.whenStable().then(() => {
      component.control.markAsTouched();
      const element = fixture.debugElement.nativeElement as Document;
      const error = element.querySelector('[data-testid="required-error"]');

      expect(error).toBeTruthy();
    });
  });

  it('should display email error message', () => {
    const invalidEmail = 'email@f,';
    fixture.whenStable().then(() => {
      component.control.setValue(invalidEmail);
      component.control.markAsTouched();
      const element = fixture.debugElement.nativeElement as Document;
      const error = element.querySelector('[data-testid="email-error"]');

      expect(error).toBeTruthy();
    });
  });

  it('should set email in form and call authFormStateService', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const input = element.querySelector('input') as HTMLInputElement;

      const validEmail = faker.internet.email({
        provider: 'mentoriaangularpro',
      });

      input.value = validEmail;
      input.dispatchEvent(new Event('input'));

      component.setEmail();
      expect(component.control.value).toBe(validEmail);
      expect(input.value).toBe(validEmail);
      expect(mockEmailFormStateService.setEmail).toHaveBeenCalledWith(
        validEmail,
      );
    });
  });

  it('should initially have an empty email control', () => {
    expect(component.control.value).toEqual('');
  });

  it('should set the form control value on input', () => {
    const element = fixture.debugElement.nativeElement as Document;
    const emailInput = element.querySelector('input') as HTMLInputElement;
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.control.value).toEqual('test@example.com');
  });

  it('should show required error when email is empty', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const emailInput = element.querySelector('input') as HTMLInputElement;
      const error = element.querySelector(
        '[data-testid="email-error"]',
      ) as HTMLElement;
      expect(error.textContent).toBe(''); // Initially hidden

      emailInput.value = '';
      emailInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(error.textContent).toContain('Email é obrigatório');
    });
  });

  it('should hide required error when email is valid', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const emailInput = element.querySelector('input') as HTMLInputElement;
      const error = element.querySelector(
        '[data-testid="required-error"]',
      ) as HTMLElement;
      emailInput.value = faker.internet.email({
        provider: 'mentoriaangularpro',
      });
      emailInput.dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(error.textContent).toBe('');
    });
  });

  it('should show email error when email is invalid', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const emailInput = element.querySelector('input') as HTMLInputElement;
      const error = element.querySelector(
        '[data-testid="email-error"]',
      ) as HTMLElement;

      expect(error.textContent).toBe(''); // Initially hidden

      emailInput.value = 'mentorado';
      emailInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(error.textContent).toContain('Informe um e-mail válido');
    });
  });

  it('should hide email error when email is valid', () => {
    fixture.whenStable().then(() => {
      const element = fixture.debugElement.nativeElement as Document;
      const emailInput = element.querySelector('input') as HTMLInputElement;
      const error = element.querySelector(
        '[data-testid="email-error"]',
      ) as HTMLElement;

      emailInput.value = faker.internet.email({
        provider: 'mentoriaangularpro',
      });
      emailInput.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(error.textContent).toBe('');
    });
  });
});
