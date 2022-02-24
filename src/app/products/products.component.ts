import { product } from './../model/product';
import { ProductsService } from './../shared/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: product[] = [];
  potentialProduct: product[] = []; //think options when it is an array of different objects
  // selectedPotentialProduct: product[] = [];
  // @Output()
  // potentialProductEmitter = new EventEmitter();

  constructor(private ProductsService: ProductsService) {}
  productCountRadioButton: string = 'total';

  ngOnInit(): void {
    this.getInfoFromService();
  }

  getInfoFromService() {
    return (this.products = this.ProductsService.getinfo());
  }

  showPotentialBuy(product: any) {
    this.potentialProduct = product;
  }

  getNumTotalProducts() {
    return this.products.length;
  }

  getNumAvailableProducts() {
    return this.products.filter((item) => item.available === 'yes').length;
  }

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
    console.log(this.productCountRadioButton);
  }
  // exportingPotentialProduct() {
  //   this.potentialProductEmitter.emit(this.selectedPotentialProduct);
  // }
}
