const nSorteado = Math.floor(Math.random() * 11);

let tenta = 0;

while (true) {
    const tentativas = Number(prompt('Adivinhe um número de 0 a 10:'));
    if (isNaN(tentativas) || tentativas < 0 || tentativas > 10) {
        alert('Digite um número válido de 0 a 10, por favor!');
    } else {
        tenta++;
        if (tentativas === nSorteado) {
            alert(`Parabéns, você acertou! O número é ${tentativas}`);
            break;
        } else {
            alert('Tente novamente');
        }
    }
}