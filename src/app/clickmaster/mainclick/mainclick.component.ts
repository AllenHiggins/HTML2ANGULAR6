import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainclick',
  templateUrl: './mainclick.component.html',
  styleUrls: ['./mainclick.component.scss']
})
export class MainclickComponent implements OnInit {
  close: boolean;
  close2: boolean;
  constructor() { }

  ngOnInit() {
    this.close = false;
    this.close = false;
  }

  closePanel(tab: string) {
    if ( tab === 'close') {
      this.close = !this.close;
      this.close2 = false;
      console.log(this.close);
    } else {
      this.close2 = true;
    }
  }

}
