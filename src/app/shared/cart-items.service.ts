import { Injectable } from '@angular/core';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CartItemsService {
  private potentialProducts: product[] = []; //private?

  addItems(product: product) {
    this.potentialProducts.push(product);
  }

  getItems(): product[] {
    return this.potentialProducts;
  }
}
