let codigo = window.prompt(
  "Informe seu código promocional(DESC1, DESC2, DESC3, DESC4 ou DESC5):"
).toUpperCase();

let produto = 1000;
let valorDesc;
let valorTotal;

switch (codigo) {
  case "DESC1":
    valorDesc = (produto * 0.05);
    valorTotal = produto - valorDesc;
    console.log(`O valor do produto é ${produto} o valor com 5% de desconto ficou: ${valorTotal}`);
    break;
  case "DESC2":
    valorDesc = (produto * 0.10);
    valorTotal = produto - valorDesc;
    console.log(`O valor do produto é ${produto} o valor com 10% de desconto ficou: ${valorTotal}`);
    break;
  case "DESC3":
    valorDesc = (produto * 0.15);
    valorTotal = produto - valorDesc;
    console.log(`O valor do produto é ${produto} o valor com 15% de desconto ficou: ${valorTotal}`);
    break;
  case "DESC4":
    valorDesc = (produto * 0.20);
    valorTotal = produto - valorDesc;
    console.log(`O valor do produto é ${produto} o valor com 20% de desconto ficou: ${valorTotal}`);
    break;
  case "DESC5":
    valorDesc = (produto * 0.25);
    valorTotal = produto - valorDesc;
    console.log(`O valor do produto é ${produto} o valor com 25% de desconto ficou: ${valorTotal}`);
    break;
  default:
    console.log("ERRO: Cupom não é válido!");
    break;
}
