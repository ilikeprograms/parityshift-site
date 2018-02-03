import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about.component';

const routes: Array<Route> = [{
  path: '',
  component: AboutComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
