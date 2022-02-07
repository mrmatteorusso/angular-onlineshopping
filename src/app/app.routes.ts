import { provideRoutes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const APP_ROUTES = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
];

export const APP_ROUTES_PROVIDER = [provideRoutes(APP_ROUTES)];
