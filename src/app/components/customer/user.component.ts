import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent { 
  sidebarVisible: boolean = false;
  numberOfOrders: number = 0;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Toggle the sidebar visibility here 
  }
}
