const imcCalc = (peso, altura) => {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        return 'Você está abaixo do peso';
    } else if (imc >= 18.6 && imc <= 24.9){
        return 'Você está dentro do intervalo saudável';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Você está acima do peso';
    } else {
        return 'Você está obeso!';
    }
}

const peso = 65;
const altura = 1.58;
const result = imcCalc(peso, altura);
console.log(`O seu imc é ${result}`);