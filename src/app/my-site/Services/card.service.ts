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
        'demo/angular6/strata',
        'fab fa-angular animated fadeIn'),
      new Card(
        'assets/images/cards/clickmaster.png',
        'Click Master',
      'demo/angular6/clickmaster',
      'fab fa-angular animated fadeIn'),
      new Card(
        'assets/images/cards/aerial.png',
        'Aerial',
      'demo/angular6/aerial',
      'fab fa-angular animated fadeIn'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#',
      '')
    ];

    this.newSiteList = [
      new Card(
        'assets/images/cards/listapp.png',
        'List App',
        'https://allenhiggins.github.io/listapp/',
        'fab fa-react animated fadeIn'
      ),
      new Card(
        'assets/images/cards/coffeemaster.png',
        'Coffee Master',
        'https://allenhiggins.github.io/coffeemasterSite/',
        'fab fa-angular animated fadeIn')
    ];
   }

   getCardList() {
     return this.cardList.slice();
   }

   getNewSiteList() {
     return this.newSiteList.slice();
   }
}
