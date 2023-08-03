import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css'],
})
export class PageNavigationComponent {
  @Output() handleUserClick = new EventEmitter();
  pageNumber!: number;
  @Input() totalRecords: number = 20;
  first: number = 0;
  rows: number = 20;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageNumber = event.page + 1;
    this.handleUserClick.emit(this.pageNumber);
  }
}
