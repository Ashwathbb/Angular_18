import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { APIResponseDto, AuthResponseDto, IProduct, LoginDto } from '../model/Model';
// when we need to communicate with api we need services
// then when we intract weith web apis we need to provide httpClient provider in app.config file

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://localhost:7088/api/Products/GetAllProducts';
  loginUrl:string='https://localhost:7088/api/Auth/login';
  onCartUpdated$: Subject<boolean> = new Subject<boolean>();

//creating http client object by providing in ctor this is dependenci injection

  constructor(private http: HttpClient) { }
/*
    get method return observable it may be <any>type so we have json format so we need to use interface (json to ts)

    // Assuming APIResponseDto has a property `Data` which is an array
    
getProducts(): Observable<APIResponseModel> {
      return this.http.get<APIResponseModel>('your-api-url').pipe(
      map(response => response.Data || [])
    );
  }
*/
getAllProducts(): Observable<APIResponseDto> {
  return this.http.get<APIResponseDto>(this.apiUrl);
}
    
  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError('Something bad happened; please try again later.');
  }
  getAllcategory(): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}GetAllCategory`);
  }

  getAllProductsByCategoryId (categoryId: number): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`);
  } 
 
  onRegister (obj: any): Observable<APIResponseDto>{
    return this.http.post<APIResponseDto>(`${this.apiUrl}RegisterCustomer`, obj);
  } 
  onLogin(loginDto: LoginDto): Observable<any> {
    return this.http.post<any>(this.loginUrl, loginDto);
  }
  onAddToCart (obj: any): Observable<APIResponseDto>{
    return this.http.post<APIResponseDto>(`${this.apiUrl}AddToCart`, obj);
  } 

  getCartDataByCustId (custId: number): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}GetCartProductsByCustomerId?id=${custId}`);
  } 
 
  removeProduct (cartId: number): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}DeleteProductFromCartById?id=${cartId}`);
  }
}
