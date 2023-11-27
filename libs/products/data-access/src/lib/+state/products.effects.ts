import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, mergeMap, tap } from 'rxjs';
import * as ProductsActions from './products.actions';
import * as ProductsFeature from './products.reducer';
import { ProducService } from '../services/products-base';
import { Product } from '../models/product.model';
import { ProductApiService } from '../services/api-service.service';

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  // private productsService = inject(ProductApiService);

  constructor(private productsService: ProductApiService) {
    console.log('Effects');
  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      mergeMap(() =>
        this.productsService.all().pipe(
          tap(() => {
            console.log('products');
          }),
          map((products) => ProductsActions.loadProductsSuccess({ products }))
        )
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ProductsActions.loadProductsFailure({ error }));
      })
    )
  );
}
