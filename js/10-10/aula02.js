let nome = window.prompt('Qual é o seu nome?')
let nota01 = Number(window.prompt('Qual é a sua primeira nota?'));
let nota02 = Number(window.prompt('Qual é a sua segunda nota?'));
const mediaAp = 7;
let media = (nota01 + nota02) / 2;

window.alert(`Olá, ${nome} sua media é ${media}`);

if (media >= mediaAp) {
    window.alert('Aprovado');
} else {
    window.alert('Reprovado');
}


/*a = 10
b = 20

let troca = a

a = b
b = troca

console.log(a);
console.log(b);
*/