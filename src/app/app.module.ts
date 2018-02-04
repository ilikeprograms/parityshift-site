import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'parityshift-site'}),
    ClarityModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
