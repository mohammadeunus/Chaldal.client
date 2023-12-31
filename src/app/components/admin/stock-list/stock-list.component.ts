import { Component,OnInit } from '@angular/core';
import { StockModel } from 'src/app/Model/stock.model';
import { StockService } from 'src/app/Services/stock/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit{
  
    stocks: any;
    constructor(private stockService: StockService) { }
  
    ngOnInit(): void {
      this.stockService.getallStocks()
        .subscribe({
            next: (stocks) => {
              this.stocks = stocks;
              console.log(stocks);
            },
            error: (err: any) => console.log(err)
        })      
    }

}
