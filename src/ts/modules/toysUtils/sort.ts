import { ICardParams } from './cards';

const sort = (cardsArray: ICardParams[]) => {
  const sortSelect = <HTMLInputElement>document.querySelector('.sort-select');
  const sortSelected = sortSelect.value;

  if (sortSelected === 'sort-name-growth') {
    cardsArray.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  } else if (sortSelected === 'sort-name-decrease') {
    cardsArray.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
  } else if (sortSelected === 'sort-year-growth') {
    cardsArray.sort((a, b) => +a.year - +b.year);
  } else if (sortSelected === 'sort-year-decrease') {
    cardsArray.sort((a, b) => +b.year - +a.year);
  }
};

export default sort;
