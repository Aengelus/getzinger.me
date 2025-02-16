import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.sass']
})
export class PrivateComponent implements OnInit {

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
