let peso = Number(window.prompt('Qual é o seu peso?'));
let altura = Number(window.prompt('Qual é a sua altura?'));

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
    alert('Você está dentro do intervalo saudável')
} else {
    alert('Você não está dentro do intervalo saudável')
}