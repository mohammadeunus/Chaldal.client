import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent {
  @Output() handleUserClick = new EventEmitter(); // custom event to send data to parent component using output decorator
  pageNumber!: number;
  @Input() totalRecords!: number; // this component will take input from parent component
  first: number = 0;
  rows: number = 15; // default value for rows per page is 15, means 15 records per page

  PageChanged(data: any) {
    this.first = data.first;
    this.rows = data.rows;
    this.pageNumber = data.page + 1;
    this.handleUserClick.emit(this.pageNumber);
  }
}
