import { Route, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Array<Route> = [{
  path: '',
  component: ProductsListComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
