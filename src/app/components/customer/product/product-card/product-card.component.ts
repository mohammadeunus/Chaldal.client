import { Component, Input } from '@angular/core'; 
import { CustomerProductModel } from 'src/app/Model/customer-product.model'; 
import { SharedService } from 'src/app/Services/shared/shared.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: CustomerProductModel;

  constructor(private sharedService: SharedService) {}

  // Function to trigger sending data
  sendData2cart(data: any) {
    this.sharedService.sendData(data);
  }
}
