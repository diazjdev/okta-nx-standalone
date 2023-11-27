import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './products-routes';
import { SharedUiModule } from 'shared/ui';
import { ProductComponent } from 'products/feature/ui';
import { ProductsHomeComponent } from './products-home/products-home.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedUiModule],
  declarations: [ProductsHomeComponent, ProductComponent],
})
export class ProductsFeatureProductsModule {}
