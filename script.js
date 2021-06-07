// Algorítmo para criar uma cor aleatoria e retornando com um resultado
function randomColorGenerator() {
  // source https://css-tricks.com/snippets/javascript/random-hex-color/
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (`#${randomColor}`);
}

// Escolhe uma das cores da ball para ser a resposta
function randomSelected() {
  // source https://stackoverflow.com/questions/7595557/selecting-a-random-html-element-using-javascript-only
  const randomColorSelected = document.querySelectorAll('.ball');
  const ballIndex = Math.floor(Math.random() * randomColorSelected.length);
  let newtext = randomColorSelected[ballIndex].style.backgroundColor;
  newtext = newtext.replace('rgb', '');
  return newtext;
}

// Cria dinamicamente um h4 onde vai ficar o texto rg da cor selecionada para o resultado
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

// Função para resetar e refazer o game
function resetRemove(resposta) {
  document.getElementById('cores').remove();
  document.getElementById('rgb-color').remove();
  const newText = resposta;
  newText.innerText = 'Escolha uma cor';
  ballsCreate();
  whatColor();
}

function verify(click, resposta) {
  let colorQuestion = document.querySelector('h4');
  colorQuestion = `rgb${colorQuestion.innerText}`;
  const sumPoints = document.getElementById('score');
  const novoTexto = resposta;

  if (click.target.style.backgroundColor === colorQuestion) {
    novoTexto.innerText = 'Acertou!';
    sumPoints.innerText = parseInt(sumPoints.innerText, 10) + 3;
  } else {
    novoTexto.innerText = 'Errou! Tente novamente!';
    sumPoints.innerText = parseInt(sumPoints.innerText, 10) - 1;
  }
}

// função onde vai ouvir o click e executar uma ação
function result(click) {
  const selecionado = document.querySelector('.selecionado');
  const resposta = document.getElementById('answer');

  if (click.target.classList.contains('ball')) {
    if (selecionado === null) {
      click.target.classList.add('selecionado');
      verify(click, resposta);
    } else {
      selecionado.classList.remove('selecionado');
      click.target.classList.add('selecionado');
      verify(click, resposta);
    }
  }

  if (click.target.id === 'reset-game') {
    resetRemove(resposta);
  }
}

// Irá criar os botões do roda pé do site
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

// Irá criar dinamicamente o texto onde ficará o placar
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
