import { Component, OnInit, Input } from '@angular/core';
import { LargeImage } from '../strata/Services/largeImage.Model';

@Component({
  selector: 'app-photoslider',
  templateUrl: './photoslider.component.html',
  styleUrls: ['./photoslider.component.scss']
})
export class PhotosliderComponent implements OnInit {

  @Input() images: LargeImage;

  constructor() { }

  ngOnInit() {

  }

}
