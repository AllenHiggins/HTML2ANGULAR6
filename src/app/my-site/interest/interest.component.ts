import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer } from '../Models/Developer';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  developer: Developer;

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.developer = this.developerService.getDeveloperInfo();
  }

}
