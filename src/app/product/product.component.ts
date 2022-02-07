import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Output() chosenProduct = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  buyNow(prod: any) {
    this.chosenProduct.emit(prod);
  }
}
