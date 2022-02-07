import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css'],
})
export class CustomersListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  customer: any = null;
  onSubmit(myForm: any) {
    this.customer = myForm;
    console.log('this is the new costumer');
  }
}
