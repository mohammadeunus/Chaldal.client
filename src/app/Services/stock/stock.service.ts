import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enivronment/environment';
import { StockModel } from '../../Model/stock.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseApiUrl:string =environment.apiBaseUrl;

  constructor(private http: HttpClient) { } //to be able to talk http api we need to inject httpclient
    getallStocks(): Observable<StockModel[]>{
    return this.http.get<StockModel[]>(this.baseApiUrl + 'api/stock');
  }
}
