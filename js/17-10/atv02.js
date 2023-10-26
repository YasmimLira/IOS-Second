let idade;
do {
    idade = Number(window.prompt('Digite sua idade: '));
} while (idade <= 0);
console.log(`A idade é válida: ${idade}`)