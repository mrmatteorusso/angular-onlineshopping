import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  customer: any = null;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(myForm: any) {
    this.customer = myForm;
    console.log('this is the new costumer', this.customer);
  }
}
