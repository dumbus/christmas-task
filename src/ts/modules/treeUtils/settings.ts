export function applyForm(dataNum: string) {
  const treeFormContainer = document.querySelector('.tree-container-img');
  treeFormContainer.setAttribute('src', `./assets/tree/${dataNum}.png`);
}

export function applyBg(dataNum: string) {
  const bgContainer = <HTMLElement>document.querySelector('.tree-container');
  bgContainer.style.backgroundImage = `url("./assets/bg/${dataNum}.jpg")`;
}

export function createSnowFlake() {
  const snowFlakesContainer = <HTMLElement>document.querySelector('.snowflakes');
  const snowFlake = document.createElement('i');
  snowFlake.style.left = Math.random() * window.innerWidth + 'px';
  snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
  snowFlake.style.opacity = '' + Math.random();
  snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
  snowFlake.style.transform = `rotate(${Math.random() * 100 + 'deg'})`;

  snowFlakesContainer.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
}

export function applyMusic(flag: boolean) {
  const audioTag = document.querySelector('audio');
  if (flag === true) {
    audioTag.play();
  } else {
    audioTag.pause();
  }
}
