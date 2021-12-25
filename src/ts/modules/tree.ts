import { applyForm, applyBg, createSnowFlake, applyMusic } from './treeUtils/settings';
import { applyGarland, clearGarland } from './treeUtils/garland';

interface ITreeSettings {
  soundApplied: boolean;
  snowApplied: boolean;
  treeForm: string;
  treeBg: string;
}

const defaultTreeSettings: ITreeSettings = {
  soundApplied: false,
  snowApplied: false,
  treeForm: '1',
  treeBg: '1'
};

export const tree = () => {
  let treeSettings = defaultTreeSettings;

  if (localStorage.getItem('treeSettings') === null) {
    localStorage.setItem('treeSettings', JSON.stringify(defaultTreeSettings));
  } else {
    treeSettings = JSON.parse(localStorage.getItem('treeSettings'));
  }

  applyForm(treeSettings.treeForm);
  applyBg(treeSettings.treeBg);

  const body = document.querySelector('body');
  const treeFormBtns = document.querySelectorAll('.tree-settings-form-item');
  const bgBtns = document.querySelectorAll('.tree-settings-bg-item');
  const snowBtn = document.querySelector('.tree-settings-buttons-snow');
  const audioBtn = document.querySelector('.tree-settings-buttons-audio');
  const garlandBtns = document.querySelectorAll('.tree-settings-garland-buttons-item');
  const cancelGarlandBtn = document.querySelector('.tree-settings-garland-switch');

  treeFormBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dataTree = btn.getAttribute('data-tree');
      treeSettings.treeForm = dataTree;
      localStorage.setItem('treeSettings', JSON.stringify(treeSettings));
      applyForm(dataTree);
    });
  });

  bgBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const dataBg = btn.getAttribute('data-bg');
      treeSettings.treeBg = dataBg;
      localStorage.setItem('treeSettings', JSON.stringify(treeSettings));
      applyBg(dataBg);
    });
  });

  let snowInterval: ReturnType<typeof setInterval>;

  function startSnow() {
    snowInterval = setInterval(createSnowFlake, 50);
  }

  function stopSnow() {
    clearInterval(snowInterval);
    snowInterval = null;
  }

  if (treeSettings.snowApplied === true) {
    snowBtn.classList.add('tree-settings-buttons-item-active');
    startSnow();
  } else {
    snowBtn.classList.remove('tree-settings-buttons-item-active');
  }

  snowBtn.addEventListener('click', () => {
    if (treeSettings.snowApplied === true) {
      treeSettings.snowApplied = false;
      snowBtn.classList.remove('tree-settings-buttons-item-active');
      stopSnow();
    } else {
      treeSettings.snowApplied = true;
      snowBtn.classList.add('tree-settings-buttons-item-active');
      startSnow();
    }
    localStorage.setItem('treeSettings', JSON.stringify(treeSettings));
  });

  function defaultMusic() {
    const audioTag = document.querySelector('audio');
    audioTag.play();
    body.removeEventListener('click', defaultMusic);
  }

  if (treeSettings.soundApplied === true) {
    audioBtn.classList.add('tree-settings-buttons-item-active');
    body.addEventListener('click', defaultMusic);
  } else {
    audioBtn.classList.remove('tree-settings-buttons-item-active');
  }

  audioBtn.addEventListener('click', () => {
    if (treeSettings.soundApplied === true) {
      treeSettings.soundApplied = false;
      audioBtn.classList.remove('tree-settings-buttons-item-active');
    } else {
      treeSettings.soundApplied = true;
      audioBtn.classList.add('tree-settings-buttons-item-active');
    }
    applyMusic(treeSettings.soundApplied);
    localStorage.setItem('treeSettings', JSON.stringify(treeSettings));
  });

  garlandBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyGarland(btn.getAttribute('data-color'));
    });
  });

  cancelGarlandBtn.addEventListener('click', clearGarland);
};
