import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@ecommerce/ui';

@Component({
  standalone: true,
  imports: [RouterModule, UiModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-admin-panel';
}
