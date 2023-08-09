import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerProductModel } from 'src/app/Model/customer-product.model';
import { environment } from 'src/enivronment/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseApiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {} //to be able to talk http api we need to inject httpclient

  getSearchResultsPage(
    searchTerm: string,
    pageNumber: number
  ): Observable<CustomerProductModel> {
    return this.http.get<CustomerProductModel>(
      this.baseApiUrl +
        `api/CustomerProduct/SearchProductName?productName=${searchTerm}&pageNumber=${pageNumber}`
    );
  }
}
