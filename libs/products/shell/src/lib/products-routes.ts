import { Routes } from '@angular/router';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('products/feature/products').then(
        (m) => m.ProductsFeatureProductsModule
      ),
  },
];
