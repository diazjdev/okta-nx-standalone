import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsFacade } from 'products/data-access';

@Component({
  selector: 'lib-products-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css'],
})
export class ProductsHomeComponent implements OnInit {
  private productsFacade: ProductsFacade = inject(ProductsFacade);
  ngOnInit() {
    this.productsFacade.init();
  }
}
