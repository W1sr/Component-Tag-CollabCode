/*
  = 1 ======================================================
  Objetivo: Fazer o focus funcionar sem usar o :focus-within
  O que vai ser feito: Adicionar uma class chamada -focus no label quando o input estiver com foco

  Passo a passo com código:
  1 - Pegar o component e guardar em uma variável
  2 - Pegar o label e guardar em uma variável
  3 - Pegar o input e guardar em uma variável
  4 - Ouvir o evento focus do input
  5 - Agora que ouvimos o evento focus, podemos adicionar a class -focus no label

  Anotações:
  BOM (Browser Object Model) - window
  DOM (Document Object Model) - document

  = 2 ======================================================
  Funcionalidade: Criar uma tag dinamicamente e selecionada

  Passo a passo com código:
  1 - Pegar o input
  2 - Criar um ouvinte para o evento KeyUp, KeyPress ou KeyDown
  3 - Dentro do evento precisamos descobrir quando o usuário pressiona pressiona a tecla ENTER
  4 - Quando o usuário pressionar ENTER nós queremos pegar o texto
  5 - Criar o component tag com o texto dentro como valor e usar o id e for
*/

"use strict";

const $formCollab = window.document.querySelector(".form-collab");
const $label = $formCollab.querySelector(".label");
const $input = $formCollab.querySelector(".input");
const $tags = $formCollab.querySelector(".tags");

$formCollab.addEventListener("submit", event => event.preventDefault());

$input.addEventListener("focus", focusAndBlur);
$input.addEventListener("blur", focusAndBlur);

function focusAndBlur() {
    $label.classList.toggle("-focus");
}

$input.addEventListener("keyup", event => {
  const { keyCode } = event;
  const keys = {
    13: "ENTER"
  };

  if (keys[keyCode] === "ENTER") {
    const { value } = $input;

    const template = `
      <input class="tagInput" id="${value}" type="checkbox" checked>
      <label class="tag" for="${value}">${value}</label>
    `;
    
    $tags.insertAdjacentHTML('afterbegin', template);
    $input.value = "";
  }
});