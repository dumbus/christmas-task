const garlands = document.querySelectorAll('.lightrope');

// [startDegree, numberOfLights]
const garlandSettings = [
  [78, 7],
  [72, 9],
  [66, 13],
  [56, 18],
  [50, 20],
  [40, 25]
];

export function clearGarland() {
  garlands.forEach((garland) => {
    garland.innerHTML = '';
  });
}

export function applyGarland(color: string) {
  clearGarland();
  for (let i = 0; i < garlands.length; i++) {
    let rotate = garlandSettings[i][0];
    for (let j = 0; j < garlandSettings[i][1]; j++) {
      const light = document.createElement('li');
      light.classList.add(color);
      light.style.transform = `rotate(${rotate}deg) translate(250px) rotate(-${rotate}deg)`;
      rotate += 4;
      garlands[i].append(light);
    }
  }
}
