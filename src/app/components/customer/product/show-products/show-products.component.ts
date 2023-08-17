import { Component, Input, OnInit } from '@angular/core';
import {
  CustomerProductModel,
  CustomerProductResponseModel,
} from 'src/app/Model/customer-product.model';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {
  @Input() inputPageNumber: number = 1;
  @Input() products!: CustomerProductModel[];
  @Input() totalRecords!: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  onPageNumberChanges(event: number) {
    this.inputPageNumber = event;
    this.loadData(); // Call loadData whenever the page number changes
  }

  loadData() {
    this.productService.GetProductsByPage(this.inputPageNumber).subscribe(
      (response: CustomerProductResponseModel) => {
        this.products = response.customerProductList;
        this.totalRecords = response.totalRecords;
      },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }
}
