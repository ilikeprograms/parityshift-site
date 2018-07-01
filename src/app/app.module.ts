import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'parityshift-site'}),
    LayoutModule,
    ClarityModule,
    ShareButtonsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
