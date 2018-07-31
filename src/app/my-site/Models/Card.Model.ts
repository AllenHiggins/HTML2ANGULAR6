export class Card {
  imgPath: string;
  title: string;
  route: string;

  constructor(image: string, title: string, route: string) {
    this.imgPath = image;
    this.title = title;
    this.route = route;
  }
}
