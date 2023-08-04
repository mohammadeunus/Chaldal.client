import { Component, Input } from '@angular/core'; 
import { CustomerProductModel } from 'src/app/Model/customer-product.model'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: CustomerProductModel;
}
