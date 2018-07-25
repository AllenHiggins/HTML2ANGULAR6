import {Component, OnInit, Input} from '@angular/core';
import { CarouselService } from './carousel.service';
import { LargeImage } from '../strata/Services/largeImage.Model';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './carousel-basic.html'
})
export class NgbdCarouselBasicComponent implements OnInit {
  choosenImage: LargeImage;
  images: LargeImage[] = [];
  @Input() selectedIndex: number;

  constructor(private carouselService: CarouselService) {
    // Init so component will not throw any errors when first loaded
    this.selectedIndex = 0;
  }

  ngOnInit() {
    this.images = this.carouselService.getImagesForSilder();
    // Set the selected image by the user
    this.choosenImage = this.images[this.selectedIndex];
    // Remove the selected image obj from the array
    // so it will not appear twice in the photo slider
    this.images.splice(this.selectedIndex, 1);
  }

}
