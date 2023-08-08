import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent {
  @Output() handleUserClick = new EventEmitter(); // custom event to send data to parent component using output decorator
  pageNumber!: number;
  @Input() totalRecords: number = 20; // this component will take input from parent component
  first: number = 0;
  rows: number = 20;

  PageChanged(data: any) {
    this.first = data.first;
    this.rows = data.rows;
    this.pageNumber = data.page + 1;
    this.handleUserClick.emit(this.pageNumber);
  }
}
