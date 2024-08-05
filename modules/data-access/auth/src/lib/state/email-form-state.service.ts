import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailFormStateService {
  private readonly emailSignal = signal('');
  public email = this.emailSignal.asReadonly();

  setEmail(email: string) {
    this.emailSignal.update(() => email);
  }
}
