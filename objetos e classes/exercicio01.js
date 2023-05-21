class Carro {
    marca;
    cor;
    gastoMedioPorKm
   
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
}
function calcularViagem (km, veiculo, preçoCombustivel) {
    return (km*veiculo.gastoMedioPorKm) * preçoCombustivel
    
}
    const tesla = new Carro('Tesla','Branco', 1/15)
    const bugatti = new Carro('Bugatti', 'Preto', 1/5)
    const gasolina = 6.59
    const etanol = 4.49
    const km = 75
console.log(calcularViagem(km, tesla, gasolina))
console.log(calcularViagem(km, tesla, etanol ))

console.log(`Gastara com o Bugatti se for gasolina R$` + calcularViagem(75, bugatti, gasolina))
console.log(calcularViagem(75, bugatti, etanol))