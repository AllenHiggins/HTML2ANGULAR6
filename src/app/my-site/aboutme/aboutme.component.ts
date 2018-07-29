import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer } from '../Models/Developer';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  developer: Developer;
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.developer = this.developerService.getDeveloperInfo();
  }

}
