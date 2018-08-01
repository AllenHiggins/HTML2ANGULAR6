import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer } from '../Models/Developer';
import { LargeImage } from '../../strata/Services/largeImage.Model';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  developer: Developer;
  imagelist: LargeImage[] = [];

  constructor(
    private developerService: DeveloperService) {
    this.imagelist = [
      new LargeImage( '', '', 'assets/images/mypics/1.jpg'),
      new LargeImage( '', '', 'assets/images/mypics/2.jpg'),
      new LargeImage( '', '', 'assets/images/mypics/3.jpg'),
      new LargeImage( '', '', 'assets/images/mypics/4.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/5.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/6.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/7.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/8.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/9.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/10.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/11.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/12.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/13.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/14.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/15.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/16.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/17.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/18.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/19.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/20.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/21.jpg'),
      new LargeImage( '', '' , 'assets/images/mypics/22.jpg')
    ];
   }

  ngOnInit() {
    this.developer = this.developerService.getDeveloperInfo();
  }
}
