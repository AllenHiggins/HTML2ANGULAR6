export class Card {
  imgPath: string;
  title: string;
  route: string;
  icon: string;

  constructor(image: string, title: string, route: string, icon: string) {
    this.imgPath = image;
    this.title = title;
    this.route = route;
    this.icon = icon;
  }
}
