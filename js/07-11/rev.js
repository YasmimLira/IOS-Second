let cor = document.getElementById('h1');
cor.style.backgroundColor = 'pink';

let corP = document.getElementsByClassName('p');

for(i = 0; i < corP.length; i++){
    corP[i].style.color = 'green';   
}

let corLista = document.getElementsByClassName('li');

for(i = 0; i < corLista.length; i++){
    corLista[i].style.color = 'blue';
}