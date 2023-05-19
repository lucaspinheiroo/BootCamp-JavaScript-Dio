console.log('Olá'); 

const valorEtanol = 4.49
const valorGasolina = 6.49;
const combustivelUsado = valorGasolina
const consumomedio = 7.3;
const distancia = 233;

const litroPorKm = (distancia/consumomedio)


if (combustivelUsado === valorEtanol) {
    console.log(litroPorKm*valorEtanol)
} else {
    console.log(litroPorKm*valorGasolina)
}