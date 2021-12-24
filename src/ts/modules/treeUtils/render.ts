import data from '../../../data.json';
import { ToyCard } from './cards';

let favoritesNumbers: number[];

if (localStorage.getItem('favoritesNumbers') !== null) {
  favoritesNumbers = JSON.parse(localStorage.getItem('favoritesNumbers'));
} else {
  favoritesNumbers = [];
}

export function renderToysCards() {
  if (favoritesNumbers.length < 1) {
    for (let i = 0; i < 20; i++) {
      console.log(data[i]);
      const card = new ToyCard(data[i]);
      card.insertCard();
    }
  } else {
    for (let i = 0; i < favoritesNumbers.length; i++) {
      console.log(data[favoritesNumbers[i] - 1]);
      const card = new ToyCard(data[favoritesNumbers[i] - 1]);
      card.insertCard();
    }
  }
}
