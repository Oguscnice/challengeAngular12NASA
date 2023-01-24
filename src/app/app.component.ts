import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  imgUrl: string = '';
  datePicture : Date = new Date();
  title = 'challengeAngular12NASA';

  constructor(public imgOfTheDay: NasaService) {}

  ngOnInit(): void {
    this.imgOfTheDay
      .getImageOfTheDay()
      .subscribe((items) => (this.imgUrl = items.url));
      this.imgOfTheDay
      .getImageOfTheDay()
      .subscribe((items) => (this.datePicture = items.date));
  }
}
