import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSubject = new Subject<any>();
  private numberOfItems = new Subject<number>();

  sendData(data: any) {
    this.dataSubject.next(data);
  }
  sendNumberOfItems(data: any) {
    this.numberOfItems.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
  getNumberOfItems() {
    return this.numberOfItems.asObservable();
  }
}
