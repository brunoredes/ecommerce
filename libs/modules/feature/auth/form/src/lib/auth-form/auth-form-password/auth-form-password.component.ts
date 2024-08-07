import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormPasswordComponent {
  control = inject(AuthFormComponent).form.controls.password;
  loginInput = input<() => void>();

  authForm = inject(AuthFormComponent);

  login() {
    if(this.authForm && this.control.valid) {
      this.authForm.login();
    }
  }

}
