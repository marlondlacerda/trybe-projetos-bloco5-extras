const container = document.querySelector('#meme-image-container');
const preMemes = document.querySelector('#meme-templates').childNodes;

const inputImg = document.querySelector('#meme-insert');
const inputText = document.querySelector('#text-input');

const memeImage = document.querySelector('#meme-image');
const memeText = document.querySelector('#meme-text');

const earth = document.querySelector('#earth');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');

let btnDownload = document.querySelector('.download');
const save = document.querySelector('#save');


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

preMemes.forEach((element) => {
  element.addEventListener('click', () => {
    memeImage.src = element.src;
  });
});

// source https://dev.to/cjuniordev/transformando-html-em-imagens-2k5e
save.addEventListener('click', () => {
  html2canvas(document.querySelector('#meme-image-container')).then(canvas => {
    btnDownload.href = canvas.toDataURL('image/png');
    btnDownload.download =  'minha-imagem';
    btnDownload.click();
  })
});
