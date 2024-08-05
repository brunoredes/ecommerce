import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Auth } from '@ecommerce/auth-data-access';

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
}
