import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Array<Route> = [{
  path: 'about',
  loadChildren: './about/about.module#AboutModule'
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'about'
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
