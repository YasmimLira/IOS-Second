let elemento1 = window.document.getElementById('titulo');
elemento1.style.color = '#144c7c';
elemento1.innerText = 'Segundo elemento DOM';

let elemento2 = window.document.getElementsByClassName('element1')[0];
elemento2.style.color = '#015958';

let elemento3 = document.getElementsByName('element2');
elemento3[0].style.backgroundColor = 'green';

function clique() {
    let elemento = document.getElementById('cor');
    elemento.style.backgroundColor = '#be91e9';
}

function voltar() {
    let elemento = document.getElementById('cor');
    elemento.style.backgroundColor = 'coral';
}