import { Component, Input } from '@angular/core';
import { tap, catchError, throwError } from 'rxjs';
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
  @Input() searchingEntry!: string;
  @Input() products!: any;
  totalRecords!: number;
  succeeded!: boolean;
  dataLoaded = false; // Track if data has been loaded
  noResultsFound = false; // Track if no results were found

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.loadSearchQuery();

    if (this.searchingEntry != null) {
      console.log('Search entry in app-search:', this.searchingEntry); // executes only when this page is loaded or reloaded
    }
  }

  ngOnChanges(): void {
    this.loadData();

    console.log('noResultsFound: ' + this.noResultsFound);
    console.log('dataLoaded: ' + this.dataLoaded);
    console.log('products: ' + this.products);
  }

  onPageNumberChanges(event: number) {
    this.inputPageNumber = event;
    this.loadData(); // Call loadData whenever the page number changes
  }

  private loadData() {
    this.searchService
      .getSearchResultsPage(this.searchingEntry, this.inputPageNumber)
      .subscribe({
        next: (data: CustomerProductModel) => {
          this.products = data;
          this.dataLoaded = true;
          this.noResultsFound = this.products.length == 0;
          console.log(data);
        },
        error: (err: any) => console.log(err),
      });
  }

  private loadSearchQuery() {
    this.searchService.getData().subscribe((data) => {
      this.searchingEntry = data;
    });
  }
}
