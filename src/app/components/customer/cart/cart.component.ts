import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/Model/cart.model';
import { SharedService } from 'src/app/Services/shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartModel[] = []; // Initialize an empty cart
  numberOfCartItems: number = this.cartItems.length;
  TotalPrice: number = 0;

  constructor(private sharedServices: SharedService) {}

  ngOnInit() {
    this.getDataFromProductCard();
  }

  getDataFromProductCard() {
    //on add to cart button click from product card
    this.sharedServices.getData().subscribe((data) => {
      this.cartItems.push({
        quantity: 0,
        productRefId: data.ProductId,
        productName: data.name,
        productSellingPrice: data.sellingPrice,
        customerRefId: 21,
      });
      this.numberOfCartItems = this.cartItems.length;
      this.TotalPrice = this.cartItems.reduce(
        (acc, item) => acc + item.productSellingPrice,
        0
      );
    });
  }

  emptyCart() {
    this.cartItems = [];
    this.TotalPrice = 0;
    this.numberOfCartItems = this.cartItems.length;
  }

  checkout() {
    console.log('Checkout', this.cartItems);
    this.emptyCart();
  }
  removeFromCart(_t9: CartModel) {
    throw new Error('Method not implemented.');
  }
  increamentQnty() {
    throw new Error('Method not implemented.');
  }
  decreamentQnty() {
    throw new Error('Method not implemented.');
  }
}
