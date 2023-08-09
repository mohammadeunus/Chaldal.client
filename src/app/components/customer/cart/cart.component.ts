import { Component, Input, OnInit } from '@angular/core';
import { CartModel } from 'src/app/Model/cart.model';
import { SharedService } from 'src/app/Services/shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartModel[] = [];
  numberOfCartItems: number = this.cartItems.length;
  TotalPrice: number = 0;

  constructor(private sharedServices: SharedService) {}

  ngOnInit() {
    this.loadCartData();
  }

  loadCartData() {
    this.getDataFromProductCard();
    this.calculateTotalPrice();
  }

  getDataFromProductCard() {
    this.sharedServices.getData().subscribe((data) => {
      const cartItem = this.createCartItem(data);
      this.addToCart(cartItem);
    });
  }

  createCartItem(data: any): CartModel {
    return {
      quantity: 1,
      productRefId: data.ProductId,
      productName: data.name,
      productSellingPrice: data.sellingPrice,
      customerRefId: 21,
    };
  }

  addToCart(cartItem: CartModel) {
    this.cartItems.push(cartItem);
    this.numberOfCartItems = this.cartItems.length;
    this.sharedServices.sendNumberOfItems(this.numberOfCartItems);
  }

  calculateTotalPrice() {
    this.TotalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.productSellingPrice * item.quantity,
      0
    );
  }

  emptyCart() {
    this.cartItems = [];
    this.TotalPrice = 0;
    this.numberOfCartItems = this.cartItems.length;
    this.sharedServices.sendNumberOfItems(this.numberOfCartItems);
  }

  checkout() {
    console.log('Checkout', this.cartItems);
    this.emptyCart();
  }

  removeFromCart(item: CartModel) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.calculateTotalPrice();
      this.numberOfCartItems = this.cartItems.length;
      this.sharedServices.sendNumberOfItems(this.numberOfCartItems);
    }
  }

  incrementQuantity(item: CartModel) {
    item.quantity++;
    this.calculateTotalPrice();
    console.log(this.cartItems);
  }

  decrementQuantity(item: CartModel) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotalPrice();
    }
  }
}
