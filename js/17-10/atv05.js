for (let numero = 2; numero <= 20; numero++) {
    let nPrimo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            nPrimo = false;
            break;
        }
        
    }
    if (nPrimo) {
        console.log(numero);
    };
    
}