export class TumbNail {
  Header: string;
  Text: string;
  ImagePath: string;

  constructor(header: string, text: string, imagePath: string) {
    this.Header = header;
    this.Text = text;
    this.ImagePath = imagePath;
  }
}
