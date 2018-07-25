import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {

  @Input() header: string;
  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {

  }

}
