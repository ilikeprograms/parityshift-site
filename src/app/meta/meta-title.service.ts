import { pageTitleSuffix } from './page-title-suffix.const';

export class MetaTitleService {
  public static formatForMetaTitle(title: string): string {
    return `${title} | ${pageTitleSuffix}`;
  }
}
