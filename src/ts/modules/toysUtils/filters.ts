import data from '../../../data.json';
import { ICardParams } from './cards';
import { renderCards } from './render';

export interface IFiltersSettings {
  shapeFiltersApplied: boolean[];
  colorFiltersApplied: boolean[];
  sizeFiltersApplied: boolean[];
  favouriteFiltersApplied: boolean;
  countMin: number;
  countMax: number;
  yearMin: number;
  yearMax: number;
}

interface IfilterValues {
  shapeFiltersValues: string[];
  colorFiltersValues: string[];
  sizeFiltersValues: string[];
}

export const filters = () => {
  let currentObjArr: ICardParams[] = [];
  const cardsContainer = document.querySelector('.cards');

  const defaultfiltersSettings: IFiltersSettings = {
    shapeFiltersApplied: [false, false, false, false, false],
    colorFiltersApplied: [false, false, false, false, false],
    sizeFiltersApplied: [false, false, false],
    favouriteFiltersApplied: false,
    countMin: 1,
    countMax: 12,
    yearMin: 1940,
    yearMax: 2020
  };

  if (localStorage.getItem('filtersSettings') === null) {
    localStorage.setItem('filtersSettings', JSON.stringify(defaultfiltersSettings));
  }

  const filtersValues: IfilterValues = {
    shapeFiltersValues: ['шар', 'колокольчик', 'шишка', 'снежинка', 'фигурка'],
    colorFiltersValues: ['белый', 'желтый', 'красный', 'синий', 'зелёный'],
    sizeFiltersValues: ['большой', 'средний', 'малый']
  };

  function filter() {
    let cardsObjArr: ICardParams[] = [];
    const filtersSettings = JSON.parse(localStorage.getItem('filtersSettings'));
    // фильтр по форме
    if (filtersSettings.shapeFiltersApplied.indexOf(true) !== -1) {
      for (let i = 0; i < filtersSettings.shapeFiltersApplied.length; i++) {
        if (filtersSettings.shapeFiltersApplied[i] === true) {
          data.forEach((toy) => {
            // если фильтр включен, форма игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в массив
            if (filtersValues.shapeFiltersValues[i] === toy.shape && cardsObjArr.indexOf(toy) === -1) {
              cardsObjArr.push(toy);
            }
          });
        }
      }
    } else {
      // если фильтр выключен, пушим весь массив
      data.forEach((toy) => {
        cardsObjArr.push(toy);
      });
    }

    // фильтр по цвету
    if (filtersSettings.colorFiltersApplied.indexOf(true) !== -1) {
      const resultArr: ICardParams[] = [];

      for (let i = 0; i < filtersSettings.colorFiltersApplied.length; i++) {
        if (filtersSettings.colorFiltersApplied[i] === true) {
          cardsObjArr.forEach((toy) => {
            // если фильтр включен, цвет игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в буферный массив
            if (filtersValues.colorFiltersValues[i] === toy.color && resultArr.indexOf(toy) === -1) {
              resultArr.push(toy);
            }
          });
        }
      }
      cardsObjArr = resultArr;
    }

    // фильтр по размеру
    if (filtersSettings.sizeFiltersApplied.indexOf(true) !== -1) {
      const resultArr: ICardParams[] = [];

      for (let i = 0; i < filtersSettings.sizeFiltersApplied.length; i++) {
        if (filtersSettings.sizeFiltersApplied[i] === true) {
          cardsObjArr.forEach((toy) => {
            // если фильтр включен, размер игрушки совпадает с заданной, и такого элемента нет в массиве, добавляем элемент в буферный массив
            if (filtersValues.sizeFiltersValues[i] === toy.size && resultArr.indexOf(toy) === -1) {
              resultArr.push(toy);
            }
          });
        }
      }
      cardsObjArr = resultArr;
    }

    // фильтр по любимым
    if (filtersSettings.favouriteFiltersApplied === true) {
      const resultArr: ICardParams[] = [];

      cardsObjArr.forEach((toy) => {
        // если фильтр включен, игрушка является любимой и её нет в массиве, добавляем элемент в массив
        if (filtersSettings.favouriteFiltersApplied === toy.favorite && resultArr.indexOf(toy) === -1) {
          resultArr.push(toy);
        }
      });
      cardsObjArr = resultArr;
    }

    // фильтр по количеству
    let resultArr: ICardParams[] = [];
    cardsObjArr.forEach((toy) => {
      if (
        +filtersSettings.countMin <= +toy.count &&
        +filtersSettings.countMax >= +toy.count &&
        resultArr.indexOf(toy) === -1
      ) {
        resultArr.push(toy);
      } else {
        console.log(filtersSettings.countMax >= toy.count);
      }
    });
    cardsObjArr = resultArr;

    // фильтр по годам
    resultArr = [];
    cardsObjArr.forEach((toy) => {
      if (
        +filtersSettings.yearMin <= +toy.year &&
        +filtersSettings.yearMax >= +toy.year &&
        resultArr.indexOf(toy) === -1
      ) {
        resultArr.push(toy);
      }
    });
    cardsObjArr = resultArr;

    if (cardsObjArr.length === 0) {
      cardsContainer.innerHTML = '<div class="cards-error">Извините, совпадений не найдено...</div>';
    } else {
      cardsContainer.innerHTML = '';
    }

    return cardsObjArr;
  }

  currentObjArr = filter();
  renderCards(currentObjArr);

  const shapeFilterButtons = document.querySelectorAll('.shape-buttons-btn');
  const colorFilterButtons = document.querySelectorAll('.color-buttons-btn');
  const sizeFilterButtons = document.querySelectorAll('.size-buttons-btn');
  const favoriteFilterButton = document.querySelector('.filters-favourite-label');

  const filtersSettings = JSON.parse(localStorage.getItem('filtersSettings'));

  for (let i = 0; i < shapeFilterButtons.length; i++) {
    shapeFilterButtons[i].addEventListener('click', () => {
      if (filtersSettings.shapeFiltersApplied[i] === false) {
        shapeFilterButtons[i].classList.add('shape-buttons-btn-active');
      } else {
        shapeFilterButtons[i].classList.remove('shape-buttons-btn-active');
      }
      filtersSettings.shapeFiltersApplied[i] = !filtersSettings.shapeFiltersApplied[i];
      localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
      cardsContainer.innerHTML = '';
      renderCards(filter());
    });
  }

  for (let i = 0; i < colorFilterButtons.length; i++) {
    colorFilterButtons[i].addEventListener('click', () => {
      if (filtersSettings.colorFiltersApplied[i] === false) {
        colorFilterButtons[i].classList.add('color-buttons-btn-active');
      } else {
        colorFilterButtons[i].classList.remove('color-buttons-btn-active');
      }
      filtersSettings.colorFiltersApplied[i] = !filtersSettings.colorFiltersApplied[i];
      localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
      cardsContainer.innerHTML = '';
      renderCards(filter());
    });
  }

  for (let i = 0; i < sizeFilterButtons.length; i++) {
    sizeFilterButtons[i].addEventListener('click', () => {
      if (filtersSettings.sizeFiltersApplied[i] === false) {
        sizeFilterButtons[i].classList.add('size-buttons-btn-active');
      } else {
        sizeFilterButtons[i].classList.remove('size-buttons-btn-active');
      }
      filtersSettings.sizeFiltersApplied[i] = !filtersSettings.sizeFiltersApplied[i];
      localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
      cardsContainer.innerHTML = '';
      renderCards(filter());
    });
  }

  favoriteFilterButton.addEventListener('click', () => {
    if (filtersSettings.favouriteFiltersApplied === false) {
      favoriteFilterButton.classList.add('filters-favourite-label-active');
    } else {
      favoriteFilterButton.classList.remove('filters-favourite-label-active');
    }
    filtersSettings.favouriteFiltersApplied = !filtersSettings.favouriteFiltersApplied;
    localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
    cardsContainer.innerHTML = '';
    renderCards(filter());
  });

  for (let i = 0; i < shapeFilterButtons.length; i++) {
    if (filtersSettings.shapeFiltersApplied[i] === true) {
      shapeFilterButtons[i].classList.add('shape-buttons-btn-active');
    }
  }

  for (let i = 0; i < colorFilterButtons.length; i++) {
    if (filtersSettings.colorFiltersApplied[i] === true) {
      colorFilterButtons[i].classList.add('color-buttons-btn-active');
    }
  }

  for (let i = 0; i < sizeFilterButtons.length; i++) {
    if (filtersSettings.sizeFiltersApplied[i] === true) {
      sizeFilterButtons[i].classList.add('size-buttons-btn-active');
    }
  }

  if (filtersSettings.favouriteFiltersApplied === true) {
    favoriteFilterButton.classList.add('filters-favourite-label-active');
  }
};

export default filters;
