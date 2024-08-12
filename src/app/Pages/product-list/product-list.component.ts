import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { APIResponseDto, IProduct } from '../../core/model/Model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  productList:IProduct[]=[];

  productService=inject(ProductService)
  
  //ngOninit is the life cycle event hook whech gets call when the component is iontialise properly\

  ngOnInit(): void {
    debugger;
    
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response: APIResponseDto) => 
        {
            if (response.result) 
            {
              this.productList = response.data; // Assign the data to productList
            }
           else 
            {
              console.error('API response indicates failure:', response.message);
            }
      },
    (error) =>
       {
           alert("The api error !")
       }
    );
  }
}
