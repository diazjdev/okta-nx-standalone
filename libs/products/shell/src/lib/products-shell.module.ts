import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products-routes';
import { ProductsDataAccessModule } from 'products/data-access';
import { ProductsFeatureUiModule } from 'products/feature/ui';

@NgModule({
  imports: [
    CommonModule,
    ProductsDataAccessModule,
    ProductsFeatureUiModule,

    RouterModule.forChild(PRODUCTS_ROUTES),
  ],
  // ],
})
export class ProductsShellModule {}
