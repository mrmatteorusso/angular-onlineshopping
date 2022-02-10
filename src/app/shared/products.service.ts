import { product } from './../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: product[] = [
    {
      id: 1,
      title: 'Iphone 20',
      description: 'it features Virtual Reality App',
      price: '5000 $',
      color: 'black',
      available: 'yes',
      image: 'assets/img/iphone-white.jpg',
    },
    {
      id: 2,
      title: 'Iphone 20',
      description: 'it features Virtual Reality App',
      price: '6000 $',
      color: 'white',
      available: 'yes',
      image: 'assets/img/iphone-white.jpg',
    },
    {
      id: 3,
      title: 'Nokia 3310',
      description: 'Old fashion vintage phone',
      price: '10000 $',
      color: 'blue',
      available: 'no',
      image: 'assets/img/nokia-3310.jpg',
    },
    {
      id: 4,
      title: 'Samsung A40',
      description: 'Best performance phone ever',
      price: '200 $',
      color: 'pink',
      available: 'yes',
      image: 'assets/img/samsung-grey.jpg',
    },
    {
      id: 5,
      title: 'Samsung A40',
      description: 'Best performance phone ever',
      price: '300 $',
      color: 'grey',
      available: 'yes',
      image: 'assets/img/samsung-grey.jpg',
    },
  ];

  getinfo(): product[] {
    return this.productsList;
  }

  constructor() {}
}
