import * as noUiSlider from 'nouislider';
import { filters, defaultfiltersSettings, IFiltersSettings } from './toysUtils/filters';

const toys = () => {
  const countSlider: noUiSlider.target = document.getElementById('count-slider');
  const yearSlider: noUiSlider.target = document.getElementById('year-slider');
  let filtersSettings: IFiltersSettings;

  if (localStorage.getItem('filtersSettings') === null) {
    localStorage.setItem('filtersSettings', JSON.stringify(defaultfiltersSettings));
  } else {
    filtersSettings = JSON.parse(localStorage.getItem('filtersSettings'));
  }

  if (countSlider) {
    noUiSlider.create(countSlider, {
      start: [+filtersSettings.countMin, +filtersSettings.countMax],
      connect: true,
      step: 1,
      range: {
        min: 1,
        max: 12
      }
    });

    const countOutput0 = document.getElementById('count-output-0') as HTMLInputElement;
    const countOutput1 = document.getElementById('count-output-1') as HTMLInputElement;
    const countOutputs = [countOutput0, countOutput1];

    countSlider.noUiSlider.on('update', (values, handle) => {
      countOutputs[handle].value = `${Math.round(<number>values[handle])}`;

      filtersSettings = JSON.parse(localStorage.getItem('filtersSettings'));

      if (handle === 0) {
        filtersSettings.countMin = +countOutputs[handle].value;
        localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
        filters();
      }

      if (handle === 1) {
        filtersSettings.countMax = +countOutputs[handle].value;
        localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
        filters();
      }
      console.log(filtersSettings);
    });
  }

  if (yearSlider) {
    noUiSlider.create(yearSlider, {
      start: [+filtersSettings.yearMin, +filtersSettings.yearMax],
      connect: true,
      step: 10,
      range: {
        min: 1940,
        max: 2020
      }
    });

    const yearOutput0 = document.getElementById('year-output-0') as HTMLInputElement;
    const yearOutput1 = document.getElementById('year-output-1') as HTMLInputElement;
    const yearOutputs = [yearOutput0, yearOutput1];

    yearSlider.noUiSlider.on('update', (values, handle) => {
      yearOutputs[handle].value = `${Math.round(<number>values[handle])}`;

      filtersSettings = JSON.parse(localStorage.getItem('filtersSettings'));

      if (handle === 0) {
        filtersSettings.yearMin = +yearOutputs[handle].value;
        localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
        filters();
      }

      if (handle === 1) {
        filtersSettings.yearMax = +yearOutputs[handle].value;
        localStorage.setItem('filtersSettings', JSON.stringify(filtersSettings));
        filters();
      }
    });
  }

  const resetFiltersBtn = document.querySelector('.sort-reset-filters');
  const resetSettingsBtn = document.querySelector('.sort-reset-settings');

  resetFiltersBtn.addEventListener('click', () => {
    localStorage.setItem('filtersSettings', JSON.stringify(defaultfiltersSettings));
    filters();
    countSlider.noUiSlider.set([1, 12]);
    yearSlider.noUiSlider.set([1940, 2020]);
  });

  resetSettingsBtn.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });

  (<HTMLInputElement>document.querySelector('.header-controls-search')).focus();
};

export default toys;
