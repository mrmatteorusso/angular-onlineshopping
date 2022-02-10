import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { CockieNotificationComponent } from './cockie-notification/cockie-notification.component';
import { CountersComponent } from './counters/counters.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { ProductsService } from './shared/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    FormComponent,
    CockieNotificationComponent,
    CountersComponent,
    CustomersListComponent,
    CartComponent,
    FormMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
