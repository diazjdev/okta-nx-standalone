import { Component, OnInit, inject } from '@angular/core';
import { ProductsFacade } from 'products/data-access';

@Component({
  selector: 'lib-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
})
export class ProductsHomeComponent implements OnInit {
  private productsFacade: ProductsFacade = inject(ProductsFacade);
  products$ = this.productsFacade.allProducts$;
  ngOnInit() {
    this.productsFacade.init();
  }
}
