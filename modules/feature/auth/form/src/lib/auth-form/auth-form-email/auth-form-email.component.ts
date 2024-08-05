import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { EmailFormStateService } from '@ecommerce/auth-data-access';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormEmailComponent {
  private readonly emailFormState = inject(EmailFormStateService);
  control = inject(AuthFormComponent).form.controls.email;

  setEmail() {
    const { value } = this.control;
    this.emailFormState.setEmail(value);
  }
}
