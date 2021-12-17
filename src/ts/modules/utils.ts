interface IUtils {
  favoritesCounter: number;
  headerFavorites: HTMLElement;
  updateFavorites: (card: HTMLElement) => void;
}

export const utils: IUtils = {
  favoritesCounter: 0,
  headerFavorites: document.querySelector('.header-controls-favourites span'),

  updateFavorites(card: HTMLElement) {
    card.addEventListener('click', () => {
      if (this.favoritesCounter === 20) {
        // TODO: function with modal
        console.log('more than 20');
      } else {
        if (card.classList.contains('active')) {
          card.classList.remove('active');
          this.favoritesCounter--;
        } else {
          card.classList.add('active');
          this.favoritesCounter++;
        }
        this.headerFavorites.textContent = '' + this.favoritesCounter;
      }
    });
  }
};
