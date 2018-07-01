import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const routes: Array<Route> = [{
  path: '',
  component: AboutComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
