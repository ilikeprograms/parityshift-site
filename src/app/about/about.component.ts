import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
