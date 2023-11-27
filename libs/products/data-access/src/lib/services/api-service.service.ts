import { Injectable } from '@angular/core';
import { ProducService } from './products-base';
import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../mocks/mock-data';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor() {}

  all() {
    return of([...PRODUCTS]);
  }

  update<T>(product: T) {
    return of(product);
  }

  delete<T>(product: T) {
    console.log(product);
    return of();
  }
}
