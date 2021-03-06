import { Injectable } from '@angular/core';
import { Card } from '../Models/Card.Model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardList: Card[];
  newSiteList: Card[];

  constructor() {
    this.cardList = [
      new Card(
        'assets/images/cards/strataCover.png',
        'Strata',
      'demo/angular6/strata'),
      new Card(
        'assets/images/cards/clickmaster.png',
        'Click Master',
      'demo/angular6/clickmaster'),
      new Card(
        'assets/images/cards/aerial.png',
        'Aerial',
      'demo/angular6/aerial'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#')
    ];

    this.newSiteList = [
      new Card(
        'assets/images/cards/coffeemaster.png',
        'Coffee Master',
        'https://allenhiggins.github.io/coffeemasterSite/')
    ];
   }

   getCardList() {
     return this.cardList.slice();
   }

   getNewSiteList() {
     return this.newSiteList.slice();
   }
}
