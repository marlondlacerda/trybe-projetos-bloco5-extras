const container = document.querySelector('#meme-image-container');

const inputText = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');

const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');

const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

inputText.addEventListener('input', () => {
  memeText.innerHTML = inputText.value;
});

// source https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
inputImg.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});

fire.addEventListener('click', () => {
  container.style.border = '3px dashed red';
});

water.addEventListener('click', () => {
  container.style.border = '5px double blue';
});

earth.addEventListener('click', () => {
  container.style.border = '6px groove green';
});
