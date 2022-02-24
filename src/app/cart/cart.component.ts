import { product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  potentialProduct: product[] = [];

  constructor() {}

  ngOnInit(): void {}

  diplayPotentialProduct(data: product[]) {
    console.log(`this is the new product ${data}`);
  }
}
