import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {

  Name: string;
  Email: string;
  Msg: string;

  constructor() { }

  ngOnInit() {
    this.Name = '';
    this.Email = '';
    this.Msg = '';
  }

  sendMsg() {
    console.log(this.Name);
    if (this.Name !== '' &&
        this.Email !== '' &&
        this.Msg !== '') {

      alert('Name: ' + this.Name +
          '\nEmail: ' + this.Email +
          '\nMessage: ' + this.Msg);

      // Reset Input Values
      this.Name = '';
      this.Email = '';
      this.Msg = '';
    } else {
      alert('Please fill in the form');
    }

  }

}
