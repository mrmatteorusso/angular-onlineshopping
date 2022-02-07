import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { component: ProductsComponent, path: '' },
  { component: CartComponent, path: 'cart' },
  { component: FormMessageComponent, path: 'formMessage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
