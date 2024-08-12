import { Routes } from '@angular/router';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';
import { LoginComponent } from './Pages/login/login.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/register/register.component';

export const routes: Routes = [

   {
    path: '',
     redirectTo: '/home', 
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
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contact-Us',
        component:ContactUsComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }
];
