class Carro {
    constructor(marca, modelo, cor, ano, placa){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.placa = placa;
    }
}

let newCarro = new Carro('Fiat', 'Strada', 'Vermelho', 2020, 'HPU9034');
let newCarro2 = new Carro('Toyota', 'Supra', 'Vermelho', 1993, 'IZV7146');
let newCarro3 = new Carro('VW - VolksWagent', 'Gol 1.6 Mi/ 1.6i 2p', 'Bege', 1996, 'KLD0213');

console.log(`A marca do carro é: ${newCarro.marca} e o modelo é ${newCarro.modelo}`);
console.log(`A marca do carro é: ${newCarro2.marca} e o modelo é ${newCarro2.modelo}`);
console.log(`A marca do carro é: ${newCarro3.marca} e o modelo é ${newCarro3.modelo}`);

class Moto {
    constructor(marca, modelo, cor, ano, placa){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.placa = placa;
    }
}

let newMoto = new Moto('Honda', 'PCX', 'Azul', 2020, 'HPF2933');
let newMoto2 = new Moto('Yamaha', 'Fazer', 'Vermelho', 2023, 'NBL9537');
let newMoto3 = new Moto('Suzuki', 'Hayabusa', 'Cinza', 2019, 'NEZ3026');

console.log(`A marca da Moto é: ${newMoto.marca} e o modelo é ${newMoto.modelo}`);
console.log(`A marca da Moto é: ${newMoto2.marca} e o modelo é ${newMoto2.modelo}`);
console.log(`A marca da Moto é: ${newMoto3.marca} e o modelo é ${newMoto3.modelo}`);