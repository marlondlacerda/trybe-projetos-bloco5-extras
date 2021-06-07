// Algorítmo para criar uma cor aleatoria e retornando com um resultado
function randomColorGenerator() {
  // source https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (`#${randomColor}`);
}

function randomSelected() {
  // source https://stackoverflow.com/questions/7595557/selecting-a-random-html-element-using-javascript-only
  const randomColorSelected = document.querySelectorAll('.ball');
  const ballIndex = Math.floor(Math.random() * randomColorSelected.length);
  let newtext = randomColorSelected[ballIndex].style.backgroundColor;
  newtext = newtext.replace('rgb', '');
  return newtext;
}

function whatColor() {
  const colorText = document.querySelector('#rgb-color-selected');
  const idText = document.createElement('h4');
  idText.id = 'rgb-color';
  idText.innerText = randomSelected();
  colorText.appendChild(idText);
}

// Cria as divs contendo as balls
function ballsCreate() {
  const coresSection = document.querySelector('#balls');
  const cores = document.createElement('div');
  cores.id = ('cores');
  coresSection.appendChild(cores);
  for (let index = 1; index < 7; index += 1) {
    const divBalls = document.createElement('div');
    divBalls.className = 'ball';
    divBalls.style.backgroundColor = randomColorGenerator();
    cores.appendChild(divBalls);
  }
}

function resetRemove(resposta) {
  document.getElementById('cores').remove();
  document.getElementById('rgb-color').remove();
  const newText = resposta;
  newText.innerText = 'Escolha uma cor';
  ballsCreate();
  whatColor();
}

function result(click) {
  let colorQuestion = document.querySelector('h4');
  colorQuestion = `rgb${colorQuestion.innerText}`;
  const resposta = document.getElementById('answer');
  const sumPoints = document.getElementById('score');

  if (click.target.classList.contains('ball')) {
    if (click.target.style.backgroundColor === colorQuestion) {
      resposta.innerText = 'Acertou!';
      sumPoints.innerText = parseInt(sumPoints.innerText, 10) + 3;
    } else {
      resposta.innerText = 'Errou! Tente novamente!';
      sumPoints.innerText = parseInt(sumPoints.innerText, 10) - 1;
    }
  }

  if (click.target.id === 'reset-game') {
    resetRemove(resposta);
  }
}

function buttonsCreate() {
  const footerbuttons = document.querySelector('#buttons');

  const answerText = document.createElement('h2');
  const buttonDificult = document.createElement('button');
  const buttonReset = document.createElement('button');

  answerText.id = 'answer';
  buttonReset.id = 'reset-game';

  answerText.innerText = 'Escolha uma cor';
  buttonDificult.innerText = 'Mudar dificuldade';
  buttonReset.innerText = 'Resetar jogo/cores';

  footerbuttons.appendChild(answerText);
  footerbuttons.appendChild(buttonDificult);
  footerbuttons.appendChild(buttonReset);
}

function createPlacar() {
  const main = document.querySelector('#rgb-placar');
  const placar = document.createElement('h4');
  placar.id = 'points';
  placar.innerHTML = 'Placar: ';

  const score = document.createElement('h4');
  score.id = 'score';
  score.innerText = 0;
  main.appendChild(placar);
  main.appendChild(score);
}

window.onload = () => {
  ballsCreate();
  whatColor();
  buttonsCreate();
  createPlacar();

  document.addEventListener('click', result);
};
