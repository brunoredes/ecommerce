import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-auth-form-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-form-email.component.html',
  styleUrl: './auth-form-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormEmailComponent {}
