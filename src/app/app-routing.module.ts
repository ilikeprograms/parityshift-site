import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Array<Route> = [{
  path: 'about',
  loadChildren: './about/about.module#AboutModule'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'about'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
