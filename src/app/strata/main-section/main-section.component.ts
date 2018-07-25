import { Component, OnInit, Input } from '@angular/core';
import { MainContentService } from '../Services/main-content.service';
import { TumbNail } from '../Services/tumbnail.Model';
import { TumbnailService } from '../Services/tumbnail.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  @Input() choice: number;
  closeResult: string;
  info: any;
  btnTxt = 'Learn More';
  tumbNail: TumbNail[];

  constructor(
    private mainContentService: MainContentService,
    private tumbNailService: TumbnailService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.info = this.mainContentService.getMainContent();
    this.tumbNail = this.tumbNailService.getTumbNailData();
  }

  open(content, imgNUmber: number) {
    this.choice = imgNUmber;
    this.modalService.open(content);
  }

}
