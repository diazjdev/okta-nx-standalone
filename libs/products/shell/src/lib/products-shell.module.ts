import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products-routes';
import { ProductsDataAccessModule } from 'products/data-access';

@NgModule({
  imports: [
    CommonModule,
    ProductsDataAccessModule,

    RouterModule.forChild(PRODUCTS_ROUTES),
  ],
  // ],
})
export class ProductsShellModule {}
