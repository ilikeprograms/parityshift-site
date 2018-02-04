import { NgModule } from '@angular/core';

import { routing } from './products.routing';
import { ProductsListComponent } from './products-list.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    routing,
    CommonModule,
    ClarityModule,
    HttpClientModule,
    ShareButtonsModule
  ],
  declarations: [
    ProductsListComponent
  ]
})
export class ProductsModule {}
