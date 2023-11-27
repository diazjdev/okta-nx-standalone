import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

const components = [ProductComponent];

@NgModule({
  imports: [CommonModule],
  exports: [...components],
  declarations: [...components],
})
export class ProductsFeatureUiModule {}
