import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './about.component.html',
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  constructor(private title: Title) {
    this.title.setTitle('About us');
  }
}
