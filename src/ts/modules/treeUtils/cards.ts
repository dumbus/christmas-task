import data from '../../../data.json';
import { ICardParams } from '../toysUtils/cards';

const toysCardsContainer = document.querySelector('.tree-toys');

export class ToyCard {
  cardParams: ICardParams;

  card: HTMLElement;
  pcount: HTMLElement;
  img: HTMLElement;

  constructor(cardParams: ICardParams) {
    this.cardParams = cardParams;
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.classList.add('tree-toys-card');
    this.card.setAttribute('data-num', this.cardParams.num);

    this.pcount = document.createElement('p');
    this.pcount.setAttribute('data-num', this.cardParams.num);
    this.pcount.classList.add('tree-toys-card-count');
    this.pcount.innerHTML = this.cardParams.count;
    this.card.append(this.pcount);

    for (let i = 0; i < +this.cardParams.count; i++) {
      this.img = document.createElement('img');
      this.img.classList.add('tree-toys-img');
      this.img.setAttribute('src', `./assets/toys/${+this.cardParams.num}.png`);
      this.img.setAttribute('id', `${+this.cardParams.num}-${i + 1}`);
      this.img.setAttribute('alt', 'toy');
      this.img.setAttribute('draggable', 'true');

      this.card.append(this.img);
    }
    return this.card;
  }

  insertCard() {
    toysCardsContainer.append(this.createCard());
  }
}
