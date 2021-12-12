import * as noUiSlider from 'nouislider';

const sliders = () => {
  const countSlider: noUiSlider.target = document.getElementById('count-slider');
  const yearSlider: noUiSlider.target = document.getElementById('year-slider');

  if (countSlider) {
    noUiSlider.create(countSlider, {
      start: [1, 12],
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
    });
  }

  if (yearSlider) {
    noUiSlider.create(yearSlider, {
      start: [1940, 2020],
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
    });
  }
};

export default sliders;
