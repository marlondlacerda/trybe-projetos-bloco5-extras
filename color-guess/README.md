# Boas vindas ao repositório do projeto Adivinhação de Cor!

<div align="center">
  <img height="150px" align="right" src="https://theme.zdassets.com/theme_assets/9633455/9814df697eaf49815d7df109110815ff887b3457.png" />
  <div align="left" style="display: inline_block">
    <h2>Módulo: Fundamentos do Desenvolvimento Web</h2>
    <span>
      Este Repositório possuí projeto desenvolvido no período que estive na Trybe, abordando sobre conceitos de estilização, manipulação do DOM com Javascript e reutilização de código.
    </span>
  </div>
  <br>
</div>

## Preview
<div align="left" style="display: inline_block">
  <a href="https://marlondlacerda-color-guess.vercel.app/">Clique aqui</a> para ter acesso a um preview do App.
</div>

---

<div align="center">
  <img src="./images/preview.png" width="500">
</div>

## HABILIDADES
- Manipular o DOM
- Manipular Javascript
- Manipular o CSS.


## O que foi desenvolvido
- Uma aplicação usando <code>HTML5</code>, <code>CSS3</code> e <code>JavaScript</code>.
- Um jogo de adivinhação de cores onde sua pontuação é atualizada de acordo com os acertos.

---

# Instruções para instalar e rodar os testes de cada requisito
1. Clone o repositório
  * `git clone git@github.com:marlondlacerda/trybe-projetos.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd trybe-projetos/fundamentals/bloco_5/extras/color-guess`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * npm install

3. Entre no Vs Code para verificar os arquivos
  * Atalho no terminal: `code . `
  * A pasta test contém os testes que verifica se as funções estão atendendo o que foi pedido

4. Leia os Requisitos do Projeto logo abaixo explicando o que cada requisito propõem

5. Use o cypress para rodar os tests
  * Atalho no terminal: `npm run cypress:open`

***

<details>
    <summary>Requisitos do projeto</summary>

- [x] 1 - Adicione no seu site um título com o nome do seu jogo.

- [x] 2 - Adicione um texto com o código RGB a ser adivinhado.

- [x] 3 - Adicione a página opções de cores para serem adivinhadas.

- [x] 4 - Adicione cores nas bolas elas devem ser geradas dinâmicamente.

- [x] 5 - Clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto.

[x] 6 - Crie um botão para iniciar/reiniciar o jogo

### BÔNUS


  ✦ As bordas devem ser acrescentadas ao container, identificado como <code>meme-image-container</code>;

  ✦ Os três botões devem ser elementos do tipo <code>button</code>;

  ✦ Cada elemento <code>button</code> deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;

  ✦ Cada <code>button</code> deve ter o respectivo <code>id</code> e estilizar o container conforme especificado:

  - Um botão identificado com o <code>id</code> chamado <code>fire</code> deve estilizar o container da imagem com uma borda de 3 pixels, dashed e vermelha.

  - Um botão com <code>id</code> chamado <code>water</code> deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo double .

  - Um botão com <code>id</code> chamado <code>earth</code> deve estilizar o container da imagem com uma borda do tipo groove, verde e com 6 pixels.

  ✦ Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;


- [x] 7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
  - O elemento que mostra as miniaturas dos memes deve ser identificado um um <code>id</code> denominado <code>meme-1</code> para o primeiro meme, <code>meme-2</code> para o segundo, <code>meme-3</code> para o terceiro e <code>meme-4</code> para o quarto.

  - As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado imgs com os respectivos nomes <code>meme1.png</code>, <code>meme2.png</code>, <code>meme3.png</code> e <code>meme4.png</code>. Atenção também para o formato das imagens! ⚠️

  - As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

### RECURSOS ADICIONAIS DESENVOLVIDOS POR MIM
- [x] 8 - Adicione um novo botão de borda que volte para o padrão.
  - A cor de fundo deve ser a padrão.
  - O elemento deve possuir a <code>classe</code> denominada <code>eraser</code>
  - O <code>id</code> deve ser chamado <code>default</code> deve estilizar o container da imagem com uma borda preta, com 1 pixels do tipo solid.

- [x] 9 - Crie três inputs do tipo radio para que possa mudar o texto de lugar.
  - Os inputs devem ser chamados de começo, meio e fim. O botão começo deve ser selecionado por padrão
  - Ao clicar em qualquer um desses botões, o texto muda de lugar

- [x] 10 - Adicione um botão com a funcionalidade de salvar o meme em imagem.
  - O button com a <code>class</code> chamada <code>save</code> possui a lógica de poder conseguir fazer com o que meme criado seja salvo na máquina do usuário.

- [x] 11 - Faça com que o aplicativo seja responsivo.
</details>

---

<div align="left">
  <a href="https://github.com/marlondlacerda/trybe-projetos">Voltar para o repositório principal</a>
</div>
<div align="center">

  [⬆ Voltar para o topo](#boas-vindas-ao-repositório-do-projeto-adivinhação-de-cor)

</div>