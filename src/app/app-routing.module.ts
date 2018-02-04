import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

const routes: Array<Route> = [{
  path: 'about',
  loadChildren: './about/about.module#AboutModule'
}, {
  path: 'products',
  loadChildren: './products/products.module#ProductsModule'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
