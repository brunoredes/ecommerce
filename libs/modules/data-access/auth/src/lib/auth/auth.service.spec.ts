import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LocalstorageService } from '../localstorage/localstorage.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let localStorageService: LocalstorageService;
  let router: Router;

  beforeEach(() => {
    const routerSpy = {
      navigate: jest.fn(),
    };
    const localStorageServiceSpy = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: LocalstorageService, useValue: localStorageServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    service = TestBed.inject(AuthService);
    localStorageService = TestBed.inject(LocalstorageService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should return true and set token in localStorage if credentials are correct', () => {
      const email = 'admin@mentoriaangularpro.com';
      const password = '123456';
      const mockToken = service['mockToken'];

      service.login(email, password).subscribe((result) => {
        expect(result).toBe(true);
        expect(localStorageService.setItem).toHaveBeenCalledWith(
          'auth_token',
          mockToken,
        );
      });
    });

    it('should return false if credentials are incorrect', () => {
      const email = 'wrong@mentoriaangularpro.com';
      const password = 'wrongpassword';

      service.login(email, password).subscribe((result) => {
        expect(result).toBe(false);
        expect(localStorageService.setItem).not.toHaveBeenCalled();
      });
    });
  });

  describe('logout', () => {
    it('should remove token from localStorage and navigate to /auth', () => {
      service.logout();

      expect(localStorageService.removeItem).toHaveBeenCalledWith('auth_token');
      expect(router.navigate).toHaveBeenCalledWith(['/auth']);
    });
  });

  describe('isAuthenticated', () => {
    it('should return true if token is in localStorage', () => {
      localStorageService.getItem = jest.fn().mockReturnValue('mockToken');

      const result = service.isAuthenticated();
      expect(result).toBe(true);
    });

    it('should return false if token is not in localStorage', () => {
      localStorageService.getItem = jest.fn().mockReturnValue(null);

      const result = service.isAuthenticated();
      expect(result).toBe(false);
    });
  });

  describe('getToken', () => {
    it('should return token from localStorage', () => {
      const mockToken = 'mockToken';
      localStorageService.getItem = jest.fn().mockReturnValue(mockToken);

      const result = service.getToken();
      expect(result).toBe(mockToken);
    });

    it('should return null if no token in localStorage', () => {
      localStorageService.getItem = jest.fn().mockReturnValue(null);

      const result = service.getToken();
      expect(result).toBeNull();
    });
  });

  describe('decodeToken', () => {
    it('should decode the token correctly', () => {
      const token = service['mockToken'];
      const decodedToken = service.decodeToken(token);

      expect(decodedToken).toEqual({
        sub: 'admin@mentoriaangularpro.com',
        name: 'Admin',
        email: 'admin@mentoriaangularpro.com',
        iat: 1722993819,
        exp: 1754529819,
        iss: 'Mentoria Angular Pro',
        role: 'Admin',
      });
    });
  });
});
