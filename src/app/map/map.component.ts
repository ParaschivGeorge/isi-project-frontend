import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  screenHeight = 1000;
  url = 'https://map-isi-project.firebaseapp.com';

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    // console.log(this.screenHeight);
 }

  constructor() {
    this.onResize();
   }
}
