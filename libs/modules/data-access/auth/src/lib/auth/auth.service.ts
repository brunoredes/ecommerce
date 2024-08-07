import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'auth_token';
  private readonly mockEmail = 'admin@mentoriaangularpro.com';
  private readonly mockPassword = '123456';
  private readonly mockToken = this.generateMockToken();

  constructor(
    private localStorageService: LocalstorageService,
    private router: Router,
  ) {}

  login(email: string, password: string): Observable<boolean> {
    if (email === this.mockEmail && password === this.mockPassword) {
      this.localStorageService.setItem(this.tokenKey, this.mockToken);
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.localStorageService.removeItem(this.tokenKey);
    this.router.navigate(['/auth']);
  }

  isAuthenticated(): boolean {
    return !!this.localStorageService.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return this.localStorageService.getItem(this.tokenKey);
  }

  decodeToken(token: string): object {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  private generateMockToken(): string {
    const header = {
      alg: 'HS512',
      typ: 'JWT',
    };
    const payload = {
      sub: 'admin@mentoriaangularpro.com',
      name: 'Admin',
      email: this.mockEmail,
      iat: 1722993819,
      exp: 1754529819,
      iss: 'Mentoria Angular Pro',
      role: 'Admin',
    };

    return `${btoa(JSON.stringify(header))}.${btoa(JSON.stringify(payload))}.mock-signature`;
  }
}
