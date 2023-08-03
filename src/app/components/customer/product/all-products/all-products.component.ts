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
  slicedPproducts: any[];
  products2!: CustomerProductModel[];

  constructor(private productService: ProductService) {
    this.slicedPproducts = this.products.slice(0, 20);
  }

  //manual entry of data
  private products: CustomerProductModel[] = [
    {
      imageUrl: 'assets/products/aarong-dairy-sour-curd-500-gm.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/badhakopi-cabbage-1-pcs.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/chaldal-premium-beef-bone-in-50-gm-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/chicken-eggs-layer-12-pcs.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/dekko-combo-pasta-buy-2-get-1-free-200-gm.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/guava-premium-50-gm-1-kg.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/aarong-dairy-sour-curd-500-gm.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/badhakopi-cabbage-1-pcs.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/chaldal-premium-beef-bone-in-50-gm-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/chicken-eggs-layer-12-pcs.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/dekko-combo-pasta-buy-2-get-1-free-200-gm.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/guava-premium-50-gm-1-kg.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    // Add more products as needed
  ];
  customerProductResponse: CustomerProductResponseModel = {
    totalRecords: 40,
    customerProductList: this.products,
    Succeeded: true,
  };

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.GetProductsByPage(this.inputPageNumber).subscribe({
      next: (data) => {
        this.products2 = data;
        console.log(data);
      },
      error: (err: any) => console.log(err),
    });
  }

  onPageNumberChanges(event: any) {
    this.inputPageNumber = event;
  }
}
