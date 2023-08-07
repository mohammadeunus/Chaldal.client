import { Component, OnInit } from '@angular/core'; 
import { CustomerProductModel } from 'src/app/Model/customer-product.model';
import { ProductModel } from 'src/app/Model/product.model';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.css']
}) 
export class SuggestedProductsComponent {
  products: CustomerProductModel[] = [
    {
      ProductId: 1,
      imageUrl: 'assets/products/aci-pure-salt-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      ProductId: 1,
      imageUrl: 'assets/products/roshun-garlic-imported-25-gm-500-gm.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },{
      ProductId: 1,
      imageUrl: 'assets/products/lizol-floor-cleaner-floral-disinfectant-surface-1-ltr.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      ProductId: 1,
      imageUrl: 'assets/products/rupchanda-fortified-soyabean-oil-5-ltr.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    {
      ProductId: 1,
      imageUrl: 'assets/products/potato-regular-50-gm-1-kg.jpg',
      name: 'Aci Pure Salt 1 kg',
      weight: '1 kg',
      sellingPrice: 100,
    },
    {
      ProductId: 1,
      imageUrl: 'assets/products/deshi-gajor-local-carrot-25-gm-500-gm.jpg',
      name: 'Beauty Makeup',
      weight: '500 gm',
      sellingPrice: 150,
    },
    // Add more products as needed
  ];

  // Function to organize products into groups of three
  groupProducts(products: CustomerProductModel[], groupSize: number): CustomerProductModel[][] {
    const groupedProducts: CustomerProductModel[][] = [];
    for (let i = 0; i < products.length; i += groupSize) {
      groupedProducts.push(products.slice(i, i + groupSize));
    }
    return groupedProducts;
  }

  // Group products into sets of three
  groupedProducts: CustomerProductModel[][] = this.groupProducts(this.products, 3);
}