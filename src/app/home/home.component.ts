import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaTitleService } from '../meta/meta-title.service';
import { MetaTitles } from '../meta/meta-titles.enum';
import { MetaDescriptions } from '../meta/meta-descriptions.enum';

@Component({
  templateUrl: './home.component.html',
  selector: 'app-home',
  styles: [`
    .row {
      flex-wrap: wrap;
    }
    
    .col-md-4 {
      display: flex;
    }

    .card {
      display: flex;
      flex-direction: column;
    }
    
    .card-block {
      flex: 1 0 auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(MetaTitleService.formatForMetaTitle(MetaTitles.home));

    this.meta.addTags([{
      name: 'description',
      content: MetaDescriptions.home
    }])
  }
}
