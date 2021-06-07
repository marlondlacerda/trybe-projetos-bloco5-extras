// Algorítmo para criar uma cor aleatoria e retornando com um resultado
function randomColorGenerator() {
  // source https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (`#${randomColor}`);
}

// Cria as divs contendo as balls
function ballsCreate() {
  const coresSection = document.querySelector('#cores');
  for (let index = 1; index < 7; index += 1) {
    const divBalls = document.createElement('div');
    divBalls.className = 'ball';
    divBalls.style.backgroundColor = randomColorGenerator();
    console.log(coresSection);
    coresSection.appendChild(divBalls);
  }
}

window.onload = () => {
  ballsCreate();
};
