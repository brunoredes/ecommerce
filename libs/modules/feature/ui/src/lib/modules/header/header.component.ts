import { Component, Input } from '@angular/core';

@Component({
  selector: 'ecommerce-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) public title = '';
}
