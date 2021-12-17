const cardsContainer = document.querySelector('.cards');

export interface ICardParams {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export class Card {
  cardParams: ICardParams;
  card: HTMLElement;
  title: HTMLElement;
  img: HTMLElement;
  description: HTMLElement;
  ribbon: HTMLElement;

  count: HTMLElement;
  year: HTMLElement;
  shape: HTMLElement;
  color: HTMLElement;
  size: HTMLElement;
  favorite: HTMLElement;

  constructor(cardParams: ICardParams) {
    this.cardParams = cardParams;
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.card.setAttribute('data-num', this.cardParams.num);

    this.title = document.createElement('h2');
    this.title.classList.add('card-title');
    this.title.textContent = this.cardParams.name;
    this.card.append(this.title);

    this.img = document.createElement('img');
    this.img.classList.add('card-img');
    this.img.setAttribute('alt', 'toy');
    this.img.setAttribute('src', `./assets/toys/${this.cardParams.num}.png`);
    this.card.append(this.img);

    // Desciption block
    this.description = document.createElement('div');
    this.description.classList.add('card-description');
    this.card.append(this.description);

    this.count = document.createElement('p');
    this.count.classList.add('count');
    this.count.innerHTML = `Количество: <span>${this.cardParams.num}</span>`;
    this.description.append(this.count);

    this.year = document.createElement('p');
    this.year.classList.add('year');
    this.year.innerHTML = `Год покупки: <span>${this.cardParams.year}</span>`;
    this.description.append(this.year);

    this.shape = document.createElement('p');
    this.shape.classList.add('shape');
    this.shape.innerHTML = `Форма: <span>${this.cardParams.shape}</span>`;
    this.description.append(this.shape);

    this.color = document.createElement('p');
    this.color.classList.add('color');
    this.color.innerHTML = `Цвет: <span>${this.cardParams.color}</span>`;
    this.description.append(this.color);

    this.size = document.createElement('p');
    this.size.classList.add('size');
    this.size.innerHTML = `Размер: <span>${this.cardParams.size}</span>`;
    this.description.append(this.size);

    this.favorite = document.createElement('p');
    this.favorite.classList.add('favourite');
    if (this.cardParams.favorite === true) {
      this.favorite.innerHTML = 'Любимая: <span>Да</span>';
    } else {
      this.favorite.innerHTML = 'Любимая: <span>Нет</span>';
    }
    this.description.append(this.favorite);

    this.ribbon = document.createElement('div');
    this.ribbon.classList.add('ribbon');
    this.card.append(this.ribbon);

    return this.card;
  }

  insertCard() {
    cardsContainer.append(this.card);
  }
}
