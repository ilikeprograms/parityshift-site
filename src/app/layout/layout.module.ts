import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';
import { CopyrightComponent } from './copyright/copyright.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    CopyrightComponent,
    SocialLinksComponent,
    HeaderComponent
  ],
  imports: [
    ClarityModule,
    RouterModule
  ],
  exports: [
    CopyrightComponent,
    SocialLinksComponent,
    HeaderComponent
  ]
})
export class LayoutModule {}
