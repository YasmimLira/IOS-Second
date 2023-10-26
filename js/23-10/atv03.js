const taxaCambio = 5.32;

const converter = (euro) => {
    const real = euro * taxaCambio;
    return real;
}

const euro = 205;
const resultConv = converter(euro)
console.log(`${euro} euro(s) convertidos o valor em reais fica: ${resultConv}`);