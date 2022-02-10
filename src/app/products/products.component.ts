import { product } from './../model/product';
import { ProductsService } from './../shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.getInfoFromService();
  }

  getInfoFromService() {
    return (this.products = this.ProductsService.getinfo());
  }

  showPotentialBuy(product: any) {
    console.log(product);
  }

  getNumTotalProducts() {
    return this.products.length;
  }

  getNumAvailableProducts() {
    return this.products.filter(
      (product: { available: string }) => product.available === 'yes'
    ).length;
  }
}
