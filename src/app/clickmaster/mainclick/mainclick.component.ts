import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotolistService } from '../photolist.service';

@Component({
  selector: 'app-mainclick',
  templateUrl: './mainclick.component.html',
  styleUrls: ['./mainclick.component.scss']
})
export class MainclickComponent implements OnInit, OnDestroy {
  images: string[] = [];
  thumbs = [];
  close: boolean;
  index = 0;
  constructor( private photolistService: PhotolistService) { }

  ngOnInit() {
    this.close = true;
    this.thumbs = this.photolistService.getThumbsList();
    this.images = this.photolistService.getFullList();
    this.photolistService.selectedImage.subscribe(index => {
      this.index = index;
      this.closePanel();
    });
  }

  closePanel() {
    this.close = !this.close;
  }

  imgChoice(index: number) {
    this.photolistService.selectedImage.next(index);
  }

  // TODO
  changeImgWithArrows(direction: string) {
    // I konw the index -> this.index holds current value

    // Get lenght of the list

    // Check if moving right or left -> direction:string

    // If left is index 0, if so set index to lenght -> wrap around

    // If right is index at lenght, if so set index to 0 --> wrap around

    // Otherwise index+1 if going right and index-1 if going left
  }

  ngOnDestroy() {
    this.photolistService.selectedImage.unsubscribe();
  }

}
