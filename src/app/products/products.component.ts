import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
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

  constructor() {}

  ngOnInit(): void {}

  showPotentialBuy(product: any) {
    console.log(product);
  }

  getNumTotalProducts() {
    return this.products.length;
  }

  getNumAvailableProducts() {
    return this.products.filter((product) => product.available === 'yes')
      .length;
  }
}
