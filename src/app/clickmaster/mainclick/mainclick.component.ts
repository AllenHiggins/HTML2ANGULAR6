import { Component, OnInit } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-mainclick',
  templateUrl: './mainclick.component.html',
  styleUrls: ['./mainclick.component.scss']
})
export class MainclickComponent implements OnInit {
  images: string[] = [];
  close: boolean;
  constructor( private photolistService: PhotolistService) { }

  ngOnInit() {
    this.close = false;
    this.close = false;
    this.images = this.photolistService.getFullList();
  }

  closePanel(tab: string) {
    this.close = !this.close;
  }

}
