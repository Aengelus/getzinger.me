import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import Typed from 'typeit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  options = {
    strings: ['Student', 'Developer', 'Financial Engineer', 'Petroleum Engineer', 'Early Adopter'],
    speed: 150,
    autoStart: false,
//    afterComplete: function () { this.displayed = true; },
    loop: true,
    breakLines: false,
    lifeLike: true,
    nextStringDelay: 1000
  };
  typed: Typed;

  constructor (private httpService: HttpClient) { }
  myJson: any = [];

  fun: Function = () => console.log('Hello');

  ngOnInit () {

    this.typed = new Typed('.type-it', this.options);
/*    .pause(2000)
    .type('Developer')
    .pause(500)
    .delete()
    .type('Student')
    .pause(500)
    .delete()
    .type('Financial Analyst')
    .delete();*/

    this.httpService.get('../assets/data.json').subscribe(
      data => {
        this.myJson = data;	 // FILL THE ARRAY WITH DATA.
          //console.log(this.myJson);
      },
      (err: HttpErrorResponse) => {
          console.log (err.message);
      }
    );
  }

  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Video',
      eventLabel: 'play',
      eventAction: 'Test Campaign',
      eventValue: 10
    });
  }

}
