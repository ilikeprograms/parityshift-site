import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
