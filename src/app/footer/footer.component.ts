import { ChangeDetectionStrategy, Component } from '@angular/core';

const startingYear: number = 2018;

@Component({
  templateUrl: './footer.component.html',
  selector: 'app-footer',
  styles: [`
    :host {
      padding: 0 1rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public get copywriteYear(): string {
    const currentYear: number = new Date().getFullYear();

    if (startingYear === currentYear) {
      return '' + startingYear;
    }

    return `${startingYear} - ${currentYear}`;
  }
}
