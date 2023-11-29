function media() {
    let nota01 = Number(document.getElementById('num1').value);
    let nota02 = Number(document.getElementById('num2').value);
    let media = (nota01 + nota02) / 2;
    let pMedia = document.getElementById('p')
    pMedia.innerHTML = `A media do aluno é: ${media}`
}

