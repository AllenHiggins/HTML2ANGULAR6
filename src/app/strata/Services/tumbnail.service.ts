import { Injectable } from '@angular/core';
import { TumbNail } from './tumbnail.Model';

@Injectable({
  providedIn: 'root'
})
export class TumbnailService {

  tumbNail: TumbNail[] = [];

  constructor() {
    this.tumbNail = [
      new TumbNail(
        'Magna sed consequat tempus',
        'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        'assets/images/tumbnails/01.jpg'),
      new TumbNail(
        'Ultricies lacinia interdum',
        'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        'assets/images/tumbnails/02.jpg'),
      new TumbNail(
        'Tortor metus commodo',
        'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        'assets/images/tumbnails/03.jpg'),
      new TumbNail(
        'Quam neque phasellus',
      'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
      'assets/images/tumbnails/04.jpg'),
      new TumbNail(
        'Nunc enim commodo aliquet',
        'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        'assets/images/tumbnails/05.jpg'),
      new TumbNail(
        'Risus ornare lacinia',
        'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
        'assets/images/tumbnails/06.jpg'),
    ];
  }

  getTumbNailData() {
    return this.tumbNail.slice();
  }
}
