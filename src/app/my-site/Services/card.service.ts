import { Injectable } from '@angular/core';
import { Card } from '../Models/Card.Model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  cardList: Card[];
  constructor() {
    this.cardList = [
      new Card(
        'assets/images/cards/strataCover.png',
        'Strata',
      'demo/angular6/strata'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#'),
      new Card(
        'assets/images/cards/workingonit.gif',
        'Oop\'s',
      '#'),
    ];
   }

   getCardList() {
     return this.cardList.slice();
   }
}
