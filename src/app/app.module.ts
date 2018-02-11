import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SocialLinksComponent } from './social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CopyrightComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'parityshift-site'}),
    ClarityModule,
    ShareButtonsModule.forRoot(),
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
