const createLetterButton = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const letterLocal = document.querySelector('#carta-gerada');

const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotation = ['rotateleft', 'rotateright'];
const groupInclination = ['skewleft', 'skewright'];

const sortClass = (type) => type[Math.floor(Math.random() * type.length)];

const removeChilds = () => {
  while (letterLocal.firstChild) {
    letterLocal.removeChild(letterLocal.firstChild);
  }
};

const createLetter = (letterSplited) => {
  letterSplited.forEach((element) => {
    const span = document.createElement('span');
    span.innerText = element;

    span.classList.add(sortClass(groupStyle), sortClass(groupSize));
    span.classList.add(sortClass(groupRotation), sortClass(groupInclination));

    letterLocal.appendChild(span);
  });
};

const verifyLetter = () => {
  const { value } = inputText;

  if (value === '') return alert('Texto Vazio.');

  if (!value.replace(/\s/g, '').length) {
    // https://stackoverflow.com/a/10262019
    letterLocal.innerText = 'por favor, digite o conteúdo da carta.';
    return;
  }

  removeChilds();

  const letterSplited = value.split(' ');
  createLetter(letterSplited);
};

createLetterButton.addEventListener('click', () => verifyLetter());
inputText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') verifyLetter();
});
