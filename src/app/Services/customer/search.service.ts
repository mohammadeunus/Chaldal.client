import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  CustomerProductModel,
  CustomerProductResponseModel,
} from 'src/app/Model/customer-product.model';
import { environment } from 'src/enivronment/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseApiUrl: string = environment.apiBaseUrl;
  private dataSubject = new Subject<string>();

  constructor(private http: HttpClient) {} //to be able to talk http api we need to inject httpclient

  getSearchResultsPage(
    searchTerm: string,
    pageNumber: number
  ): Observable<CustomerProductResponseModel> {
    return this.http.get<CustomerProductResponseModel>(
      this.baseApiUrl +
        `api/CustomerProduct/SearchProductName?productName=${searchTerm}&pageNumber=${pageNumber}`
    );
  }

  sendData(data: any) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
