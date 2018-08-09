import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aerial',
  templateUrl: './aerial.component.html',
  styleUrls: ['./aerial.component.scss']
})
export class AerialComponent implements OnInit {
  title: string;
  subTitle: string;
  links = [];
  constructor() { }

  ngOnInit() {
    this.title = 'Adam Jensen';
    this.subTitle = 'Security Chief . Cyborg . Never asked for this';
    this.links = [
      'fa fa-twitter',
      'fa fa-facebook-f',
      'fa fa-dribbble',
      'fa fa-github',
      'fa fa-envelope-o'
    ];
  }

}
