import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  @Input() sidebarVisible: boolean = false; 
  cartItems: any[] = []; // Initialize an empty cart
  numberOfCartItems: number = this.cartItems.length; 


  addToCart(item: any) {
    this.cartItems.push(item);
  }

  checkout() {
    // Implement your checkout logic here
    console.log('Checkout', this.cartItems);
    this.cartItems = []; // Clear the cart after checkout
  }
}
