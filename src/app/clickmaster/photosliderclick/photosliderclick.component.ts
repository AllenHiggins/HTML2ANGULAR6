import { Component, OnInit, Input } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-photosliderclick',
  templateUrl: './photosliderclick.component.html',
  styleUrls: ['./photosliderclick.component.scss']
})
export class PhotosliderclickComponent implements OnInit {
  choosenImage: string;
  images: string[] = [];
  @Input() selectedIndex: number;

  constructor(private photolistService: PhotolistService) {
    this.selectedIndex = 0;
  }

  ngOnInit() {
    this.images = this.photolistService.getFullList();
    this.choosenImage = this.images[this.selectedIndex];
    this.images.splice(this.selectedIndex, 1);
  }

}
