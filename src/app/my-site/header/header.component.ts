import { Component, OnInit } from '@angular/core';
import { DeveloperService } from '../developer.service';
import { Developer } from '../Models/Developer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  developer: Developer;

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.developer = this.developerService.getDeveloperInfo();
    console.log(this.developer.LinkedIn + this.developer.GitHub);
  }

}
