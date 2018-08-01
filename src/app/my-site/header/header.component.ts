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
  istrue: boolean;
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.istrue = false;
    this.developer = this.developerService.getDeveloperInfo();
  }

  open() {
    this.istrue = !this.istrue;
    return this.istrue;
  }

}
