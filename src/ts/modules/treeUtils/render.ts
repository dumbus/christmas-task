import data from '../../../data.json';
import { ToyCard } from './cards';

let favoritesNumbers: number[];

if (localStorage.getItem('favoritesNumbers') !== null) {
  favoritesNumbers = JSON.parse(localStorage.getItem('favoritesNumbers'));
} else {
  favoritesNumbers = [];
  localStorage.setItem('favoritesNumbers', JSON.stringify(favoritesNumbers));
}

export function renderToysCards() {
  favoritesNumbers = JSON.parse(localStorage.getItem('favoritesNumbers'));

  document.querySelector('.tree-toys').innerHTML = '';
  if (favoritesNumbers.length < 1) {
    for (let i = 0; i < 20; i++) {
      const card = new ToyCard(data[i]);
      card.insertCard();
    }
  } else {
    for (let i = 0; i < favoritesNumbers.length; i++) {
      const card = new ToyCard(data[favoritesNumbers[i] - 1]);
      card.insertCard();
    }
  }
}
