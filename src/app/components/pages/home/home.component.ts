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
    speed: 100,
    autoStart: false,
    afterComplete: function () { this.displayed = true; }
  };
  typed: Typed;

  constructor (private httpService: HttpClient) { }
  myJson: any = [];

  fun: Function = () => console.log('Hello');

  ngOnInit () {

    this.typed = new Typed('.type-it', this.options)
    .type('whoami')
    .break()
    .pause(1000)
    .type('<div><i class="fa fa-spinner fa-pulse fa-fw"></i>')
    .pause(500)
    .type('<i class="fa fa-spinner fa-pulse fa-fw"></i>')
    .pause(500)
    .type('<i class="fa fa-spinner fa-pulse fa-fw"></i>')
    .pause(500)
    .type('<i class="fa fa-spinner fa-pulse fa-fw"></i></div>')
    .pause(500)
    .break()
    .break()
    .type('<div class="inner"></div>');

    this.typed = new Typed('.test', this.options)
    .type('Developer')
    .delete()
    .type('Financial Analyst')
    .delete()
    .type('Cooking Chef')
    .delete();

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
