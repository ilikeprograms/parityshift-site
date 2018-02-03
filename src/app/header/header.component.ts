import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public items: Array<MenuItem>;

  constructor() {
    this.items = [
      {
        label: 'Home',
      }, {
        label: 'Products'
      }, {
        label: 'About'
      },
    ];
  }
}
