import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  CustomerProductModel,
  CustomerProductResponseModel,
} from 'src/app/Model/customer-product.model';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  inputPageNumber: number = 1;
  products2!: CustomerProductModel[];
  totalRecords!: number;
  succeeded!: boolean;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.GetProductsByPage(this.inputPageNumber).subscribe(
      (response: CustomerProductResponseModel) => {
        this.products2 = response.customerProductList;
        this.totalRecords = response.totalRecords;
        this.succeeded = response.Succeeded;
      },
      (error) => {
        console.log('Error fetching products:', error);
      }
    );
  }

  onPageNumberChanges(event: any) {
    this.inputPageNumber = event;
  }
}
