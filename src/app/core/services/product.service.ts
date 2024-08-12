import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  registerUrl:string='https://localhost:7088/api/Auth/register'
  onCartUpdated$: Subject<boolean> = new Subject<boolean>();

//creating http client object by providing in ctor this is dependenci injection

  constructor(private http: HttpClient) { }

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
 
  AddToCart (obj: any): Observable<APIResponseDto>{
    return this.http.post<APIResponseDto>(`${this.apiUrl}AddToCart`, obj);
  } 

  getCartDataByCustId (custId: number): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}GetCartProductsByCustomerId?id=${custId}`);
  } 
 
  removeProduct (cartId: number): Observable<APIResponseDto>{
    return this.http.get<APIResponseDto>(`${this.apiUrl}DeleteProductFromCartById?id=${cartId}`);
  }
  /*888888888888888888888888*/
  register(userName: string, emailId: string, phoneNumber: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(this.registerUrl, { userName, emailId, phoneNumber, password, role });
  }


  login(UserName: string, Password: string): Observable<{ success: boolean, token?: string }> {
    return this.http.post<{ success: boolean, token?: string }>(this.loginUrl, { UserName, Password });
  }

    saveToken(token: string): void {
      localStorage.setItem('authToken', token);
    }

    getToken(): string | null {
      return localStorage.getItem('authToken');
    }

    isAuthenticated(): boolean {
      return !!this.getToken();
    }

    logout(): void {
      localStorage.removeItem('authToken');
    }

}
