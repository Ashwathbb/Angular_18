import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './core/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Pages/login/login.component';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule,
    CommonModule, // Add CommonModule here
    LoginComponent,
    ProductListComponent,FormsModule,ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title=''
    /**
  userRegister: any = {
    "UserId": 0,
    "Name": "",
    "MobileNo": "",
    "Password": ""
  };
  loginObj: any =  {
    "UserName": "string",
    "UserPassword": "string"
  }

  cartData: any []= [];
  loggedUSerData: any;
  constructor(private productSr:ProductService) {
    const localData = localStorage.getItem('ecomUser');
    if(localData != null) {
      this.loggedUSerData = JSON.parse(localData)
    }
    this.productSr.onCartUpdated$.subscribe(res=>{
      if(res) {
        this.getCart();
      }
      debugger;
     
    })
  }

  ngOnInit(): void {
     this.getCart();
  }


  getCart() {
    this.productSr.getCartDataByCustId(this.loggedUSerData.custId).subscribe((res:any)=>{
      if(res.result) {
        this.cartData =  res.data;
      } else{
        alert(res.message)
      }
    })
  }

  removeCartProduct(cartId: number) {
    debugger;
    this.productSr.removeProduct(cartId).subscribe((res:any)=>{
      if(res.result) {
        this.getCart();
      } else{
        alert(res.message)
      }
    })
  }

  onRegister() {
    this.productSr.onRegister(this.userRegister).subscribe((res:any)=>{
      if(res.result) {
        alert("Signup Success");
      } else{
        alert(res.message)
      }
    })
  }
*
  logOff() {
    localStorage.removeItem('ecomUser');
    this.loggedUSerData = undefined;
  }
     */
}
