import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainclick',
  templateUrl: './mainclick.component.html',
  styleUrls: ['./mainclick.component.scss']
})
export class MainclickComponent implements OnInit {
  close: boolean;
  constructor() { }

  ngOnInit() {
  }

  closePanel() {
    this.close = !this.close;
  }

}
