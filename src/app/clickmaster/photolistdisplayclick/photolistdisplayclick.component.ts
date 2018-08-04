import { Component, OnInit } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-photolistdisplayclick',
  templateUrl: './photolistdisplayclick.component.html',
  styleUrls: ['./photolistdisplayclick.component.scss']
})
export class PhotolistdisplayclickComponent implements OnInit {
  thumbs = [];
  constructor(private photolistService: PhotolistService) { }

  ngOnInit() {
    this.thumbs = this.photolistService.getThumbsList();
  }

  imgChoice(index: number) {
    console.log(this.thumbs[index]);
  }

}
