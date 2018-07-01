import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    AboutRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule,
    ReCaptchaModule
  ]
})
export class AboutModule {
}
