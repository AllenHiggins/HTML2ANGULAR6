import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../my-site/developer.service';
import { Developer } from '../my-site/Models/Developer';

@Component({
  selector: 'app-parrallax',
  templateUrl: './parrallax.component.html',
  styleUrls: ['./parrallax.component.scss']
})
export class ParrallaxComponent implements OnInit {
  developer: Developer;
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.developer = this.developerService.getDeveloperInfo();
  }

}
