import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit  {
  bannerImages: string[] = [
    'assets/banner/popular(1).jpg',
    'assets/banner/popular(2).jpg',  
  ];
  bannerImages2: string[] = [ 
    'assets/banner/popular(4).jpg',
    'assets/banner/popular(3).jpg', 
  ];

  currentImageIndex = 0;
  currentImageIndex2 = 0;
  constructor() { }

  ngOnInit() {
    this.changeImageEverySecond(); // keep changing the currentImageIndex so that the image changes in the template
    this.changeImageEverySecond2(); 
  }

  changeImageEverySecond() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.bannerImages.length;
    }, 4100); // Change image every 2 second (2000 milliseconds)
  } 
  
  changeImageEverySecond2() {
    setInterval(() => {
      this.currentImageIndex2 = (this.currentImageIndex + 1) % this.bannerImages.length;
    }, 3800); // Change image every 2 second (2000 milliseconds)
  } 

}
