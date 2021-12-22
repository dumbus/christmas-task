import filters from './filters';

const search = () => {
  const searchInput = <HTMLInputElement>document.querySelector('.header-toys-controls-search');

  searchInput.addEventListener('input', () => {
    filters();
  });
};

export default search;
