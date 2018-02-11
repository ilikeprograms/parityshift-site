import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MetaTitleService } from '../meta/meta-title.service';
import { MetaTitles } from '../meta/meta-titles.enum';

@Component({
  templateUrl: './about.component.html',
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  constructor(private title: Title) {
    this.title.setTitle(MetaTitleService.formatForMetaTitle(MetaTitles.about));
  }
}
