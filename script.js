const createLetterButton = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const letterLocal = document.querySelector('#carta-gerada');

const removeChilds = () => {
  while (letterLocal.firstChild) {
    letterLocal.removeChild(letterLocal.firstChild);
  }
};

const createLetter = (letterSplited) => {
  letterSplited.forEach((element) => {
    const span = document.createElement('span');
    span.innerText = element;
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
