import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/Services/customer/search.service';
import { SharedService } from 'src/app/Services/shared/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  sidebarVisible: boolean = false;
  numberOfOrders: number = 0;
  searchingEntry: string = '';

  constructor(
    private sharedServices: SharedService,
    private searchServices: SearchService
  ) {}

  ngOnInit(): void {
    this.loadSearchQuery();
    this.loadNumberOfOrders();
    console.log('this:' + this.searchingEntry);
    console.log(this.searchingEntry == null);
  }

  loadNumberOfOrders() {
    this.sharedServices.getNumberOfItems().subscribe((data) => {
      this.numberOfOrders = data;
    });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible; // Toggle the sidebar visibility here
  }

  loadSearchQuery() {
    this.searchServices.getData().subscribe((data) => {
      this.searchingEntry = data;
      console.log('from user comp: ' + this.searchingEntry);
      console.log(data == null);
    });
  }
}
