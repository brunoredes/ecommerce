import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { Auth, AuthService } from '@ecommerce/auth-data-access';

@Component({
  selector: 'lib-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  form = new FormGroup<Auth>({
    email: new FormControl(
      { value: '', disabled: false },
      {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      },
    ),
    password: new FormControl(
      { value: '', disabled: false },
      {
        validators: [Validators.required, Validators.minLength(6)],
        nonNullable: true,
      },
    ),
  });

  login() {
    const { email, password } = this.form.getRawValue();
    this.authService.login(email, password).subscribe({
      next: (success) => {
        if (success) {
          this.router.navigate(['/']);
        }
      },
    });
  }
}
