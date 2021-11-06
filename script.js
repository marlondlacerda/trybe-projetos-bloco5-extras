const text = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

text.addEventListener('input', () => {
  console.log(memeText);
  memeText.innerHTML = text.value;
});
