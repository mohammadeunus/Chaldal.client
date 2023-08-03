import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enivronment/environment';
import { ProductModel } from '../../Model/product.model';
import { Observable } from 'rxjs';
import { UserProduct } from 'src/app/Model/user-product.model';
import { CustomerProductModel } from 'src/app/Model/customer-product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseApiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {} //to be able to talk http api we need to inject httpclient
  GetAllProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(
      this.baseApiUrl + 'api/product/GetAllProduct'
    );
  }
  GetAllUserProduct(): Observable<UserProduct[]> {
    return this.http.get<UserProduct[]>(
      this.baseApiUrl + 'api/product/GetAllProduct'
    );
  }
  addProduct(formData: FormData) {
    return this.http.post(
      this.baseApiUrl + 'api/product/AddInProduct',
      formData
    );
  }
  GetProductsByPage(pageNumber: number): Observable<CustomerProductModel[]> {
    return this.http.get<CustomerProductModel[]>(
      this.baseApiUrl + `api/product/GetProductsByPage/pageNumber=${pageNumber}`
    );
  }
}
