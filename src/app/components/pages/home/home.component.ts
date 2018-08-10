import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  myJson: any = [];

  ngOnInit () {
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

}
