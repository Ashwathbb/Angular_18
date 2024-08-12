import { Routes } from '@angular/router';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [

   {
    path: '',
     redirectTo: '/login', 
     pathMatch: 'full'
    },
    {
        path:'products',
        component:ProductListComponent
    },
    {
        path:'checkout',
        component:CheckoutComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
