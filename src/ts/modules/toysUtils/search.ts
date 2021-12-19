import filters from './filters';

const search = () => {
  const searchInput = <HTMLInputElement>document.querySelector('.header-controls-search');

  searchInput.addEventListener('input', () => {
    filters();
  });
};

export default search;
