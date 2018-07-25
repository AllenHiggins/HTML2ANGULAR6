import { Injectable } from '@angular/core';
import { LargeImage } from '../strata/Services/largeImage.Model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  images: LargeImage[] = [];

  constructor() {
    this.images = [
      new LargeImage( 'Image01',
                      'Some Samlpe text for Image01',
                      '../../assets/images/largeImg/01.jpg'),
      new LargeImage( 'Image02',
                      'Some Samlpe text for Image02',
                      '../../assets/images/largeImg/02.jpg'),
      new LargeImage( 'Image03',
                      'Some Samlpe text for Image03',
                      '../../assets/images/largeImg/03.jpg'),
      new LargeImage( 'Image04',
                      'Some Samlpe text for Image04',
                      '../../assets/images/largeImg/04.jpg'),
      new LargeImage( 'Image05',
                      'Some Samlpe text for Image05',
                      '../../assets/images/largeImg/05.jpg'),
      new LargeImage( 'Image06',
                      'Some Samlpe text for Image06',
                      '../../assets/images/largeImg/06.jpg')
    ];
  }

  getImagesForSilder() {
    return this.images.slice();
  }
}
