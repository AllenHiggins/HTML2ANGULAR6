import { Component, OnInit } from '@angular/core';
import { Developer } from '../Models/Developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  stack = [];
  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.stack = this.developerService.getDeveloperStack();
  }

}
