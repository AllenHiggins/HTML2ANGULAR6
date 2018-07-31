import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/card.service';
import { Card } from '../Models/Card.Model';

@Component({
  selector: 'app-latestwork',
  templateUrl: './latestwork.component.html',
  styleUrls: ['./latestwork.component.scss']
})
export class LatestworkComponent implements OnInit {
  cardList: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {

    this.cardList = this.cardService.getCardList();

  }

}
