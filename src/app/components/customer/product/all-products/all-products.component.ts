import { Component } from '@angular/core';
import { CustomerProductModel } from 'src/app/Model/customer-product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products: CustomerProductModel[] = [
    {
      imageUrl: 'assets/products/aci-pure-salt-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/roshun-garlic-imported-25-gm-500-gm.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },{
      imageUrl: 'assets/products/lizol-floor-cleaner-floral-disinfectant-surface-1-ltr.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/rupchanda-fortified-soyabean-oil-5-ltr.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      imageUrl: 'assets/products/potato-regular-50-gm-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      imageUrl: 'assets/products/deshi-gajor-local-carrot-25-gm-500-gm.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    // Add more products as needed
  ];
  slicedPproducts: any[];

    constructor() {
      this.slicedPproducts = this.products.slice(0, 6);
     }

}
