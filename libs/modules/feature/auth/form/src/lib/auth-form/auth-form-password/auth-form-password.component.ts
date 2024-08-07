import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormPasswordComponent implements OnInit {
  router = inject(Router);
  control = inject(AuthFormComponent).form.controls.password;
  email =  inject(AuthFormComponent).form.controls.email;

  ngOnInit(): void {
      if (this.email.invalid) {
        this.router.navigate(['/auth']);
      }
  }
}
