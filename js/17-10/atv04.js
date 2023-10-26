let nAtual = 0;
let nAnterior = 1;
let contador = 0;

while (contador < 10) {
    let number = nAnterior + nAtual;
    nAnterior = nAtual;
    nAtual = number
    console.log(nAnterior)
    contador++;
}