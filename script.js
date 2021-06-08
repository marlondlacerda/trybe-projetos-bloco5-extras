

function add() {
  const cartaGerada = document.querySelector('#carta-gerada');
  const criarCarta = document.querySelector('#carta-texto');

  if (criarCarta.value === '') {
    return alert ('Erro: Texto Vazio!');
  }
  if (cartaGerada.hasChildNodes()) {
    cartaGerada.remove();
    const p = document.createElement('p');
    p.id = 'carta-gerada';
    document.querySelector('#carta').appendChild(p);

    const letterItem = criarCarta.value;
    let letterString = String(letterItem);
    let letterSplit = letterString.split(' ');
    for (let index = 0; index < letterSplit.length; index++) {
      const spanText = document.createElement('span');
      spanText.className ='letterClass';
      spanText.innerHTML = letterSplit[index];
      p.appendChild(spanText);
      console.log(letterSplit[index]);
    }
  } else {
  const letterItem = criarCarta.value;
  let letterString = String(letterItem);
  let letterSplit = letterString.split(' ');
  for (let index = 0; index < letterSplit.length; index++) {
    const spanText = document.createElement('span');
    spanText.className ='letterClass';
    spanText.innerHTML = letterSplit[index];
    cartaGerada.appendChild(spanText);
    console.log(letterSplit[index]);
  }
  }

}

function result() {
  const input = document.querySelector('#carta-texto');
  const button = document.querySelector('#criar-carta');

  button.addEventListener('click', add);
  input.addEventListener('keypress', (verify) => {
    if (verify.key === 'Enter') {
      add();
    }
  })
}



window.onload = () => {
result();

}