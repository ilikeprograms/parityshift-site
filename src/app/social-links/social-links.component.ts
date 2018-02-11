import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './social-links.component.html',
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      padding: 0 1rem;
    }
  `]
})
export class SocialLinksComponent {

}
