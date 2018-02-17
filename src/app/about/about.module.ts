import { NgModule } from '@angular/core';
import { routing } from './about.routing';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReCaptchaModule } from 'angular2-recaptcha';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    routing,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClarityModule,
    ReCaptchaModule
  ]
})
export class AboutModule {
}
