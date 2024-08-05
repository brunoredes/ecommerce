import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormPasswordComponent {}
