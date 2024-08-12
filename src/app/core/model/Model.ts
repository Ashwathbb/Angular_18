//when we working with product or forms in that situation go with class becuse intial somthing becuse we are using ctor
//when we normaly stored data or hold data (like array format go with interface) here there is no ctor  
export interface IProduct  {
    productId: number
    name: string
    price: number
    productSku: string
    productShortName: string
    productDescription: string
    createdDate: string
    deliveryTimeSpan: string
    categoryId: number
    productImageUrl: string
    categoryName: string
}
export class LoginDto {
  userName: string = '';
  password: string = '';
}
// auth-response-dto.model.ts
export class AuthResponseDto {
  token?: string; // Optional, as it might be undefined if login fails
  userName?: string; // Optional, as it might be undefined if login fails
}
export interface APIResponseDto {
    message: string;
    result: boolean;
    data: IProduct[]; // This should match the structure of the data returned by your API
  }

export interface CategoryModel { 
  categoryId: number
  categoryName: string
  parentCategoryId: number;
}

export class CartClass { 
  CartId: number;
  CustId: number;
  ProductId: number;
  Quantity: number;
  AddedDate: Date;
  constructor() {
    this.AddedDate = new Date();
    this.CartId= 0;
    this.CustId= 0;
    this.ProductId= 0;
    this.Quantity= 0; 
  }
}

 