const inputText = document.querySelector('#text-input');
const inputImg = document.querySelector('#meme-insert');

const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');

inputText.addEventListener('input', () => {
  memeText.innerHTML = inputText.value;
});

// source https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
inputImg.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});
