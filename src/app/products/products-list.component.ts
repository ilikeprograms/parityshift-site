import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MetaTitleService } from '../meta/meta-title.service';
import { MetaTitles } from '../meta/meta-titles.enum';

@Component({
  templateUrl: './products-list.component.html',
  selector: 'app-products-list',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  constructor(private title: Title) {
    this.title.setTitle(MetaTitleService.formatForMetaTitle(MetaTitles.products));
  }
}
