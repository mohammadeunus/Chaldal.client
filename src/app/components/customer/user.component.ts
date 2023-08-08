import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Services/shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  sidebarVisible: boolean = false;
  numberOfOrders: number = 0;

  private intervalId: any;
  constructor(private sharedServices: SharedService) {}

  ngOnInit(): void {
    this.sharedServices.getNumberOfItems().subscribe((data) => {
      this.numberOfOrders = data;
    });
  }

  loadNumberOfOrders() {
    this.sharedServices.getNumberOfItems().subscribe((data) => {
      this.numberOfOrders = data;
    });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Toggle the sidebar visibility here
  }
}
