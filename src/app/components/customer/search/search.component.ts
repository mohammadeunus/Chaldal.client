import { Component, Input } from '@angular/core';
import {
  CustomerProductModel,
  CustomerProductResponseModel,
} from 'src/app/Model/customer-product.model';
import { SearchService } from 'src/app/Services/customer/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Input() inputPageNumber: number = 1;
  searchingEntry!: string;
  products!: CustomerProductModel[];
  totalRecords!: number;
  succeeded!: boolean;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.loadData();
  }

  onPageNumberChanges(event: number) {
    this.inputPageNumber = event;
    this.loadData(); // Call loadData whenever the page number changes
  }

  loadData() {
    this.searchService
      .getSearchResultsPage(this.searchingEntry, this.inputPageNumber)
      .subscribe(
        (response: CustomerProductResponseModel) => {
          this.products = response.customerProductList;
          this.totalRecords = response.totalRecords;
          this.succeeded = response.Succeeded;
        },
        (error) => {
          console.log('Error fetching products:', error);
        }
      );
  }
}
