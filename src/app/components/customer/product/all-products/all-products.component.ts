import { Component } from '@angular/core';
import { CustomerProductModel } from 'src/app/Model/customer-product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: CustomerProductModel[] = [
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
  slicedPproducts: any[];

  constructor() {
    this.slicedPproducts = this.products;
  }
}
