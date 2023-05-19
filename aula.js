console.log('Olá'); 

const valor_combustivel = 6.49;
const consumomedio = 7.3;
const distancia = 233;

let valorgasto = ((distancia/consumomedio)*valor_combustivel)

console.log(`O valor gasto nessa viagem foi, R$${valorgasto.toFixed(2)}`)