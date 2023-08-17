import { Component } from '@angular/core';
import { SearchService } from 'src/app/Services/customer/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchQuery: string = '';
  constructor(private SearchServices: SearchService) {}

  onEnterPressed() {
    this.SearchServices.sendData(this.searchQuery);
    console.log('Search query:' + this.searchQuery);
  }
}
