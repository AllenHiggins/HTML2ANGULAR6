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
  isMobile = false;
  index = 0;
  constructor( private photolistService: PhotolistService) { }

  ngOnInit() {
    this.close = false;
    this.thumbs = this.photolistService.getThumbsList();
    this.images = this.photolistService.getFullList();
    this.photolistService.selectedImage.subscribe(index => {
      this.index = index;
    });
    this.photolistService.thumbIsPressed.subscribe(() => {
      this.closePanel();
    });
  }

  closePanel() {
    this.close = !this.close;
  }

  imgChoice(index: number) {
    this.photolistService.selectedImage.next(index);
  }

  ngOnDestroy() {
    this.photolistService.selectedImage.unsubscribe();
    this.photolistService.thumbIsPressed.unsubscribe();
  }

}
