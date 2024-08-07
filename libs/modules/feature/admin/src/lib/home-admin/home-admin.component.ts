import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'lib-home-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAdminComponent {}
