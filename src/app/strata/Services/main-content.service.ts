import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  content = {
    header: 'Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu neque.',
    text: 'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem\
    vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor\
    primis integer massa adipiscing id nisi accumsan pellentesque commodo\
    blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu\
    lorem semper nunc nisi lorem vulputate lorem neque cubilia.'
  };

  constructor() { }

  getMainContent() {
    return this.content;
  }
}
