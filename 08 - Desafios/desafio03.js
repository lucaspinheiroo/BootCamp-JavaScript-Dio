const { gets, print } = require("./funçoes-auxiliares-copy");

const salarioBruto = gets()
const valorBeneficios = gets()


function calcularPorcentagem(valor, percentual) {
   return valor * (percentual/100);
}
function pegarAliquota(salario) {
    if(salario >= 0.00 && salario<= 1100.00){
        return 5
    } else if(salario >=1100.01 || salario <= 2500.00) {
        return 10
    } else {
        return 15
}
}

const aliquotaImposto = pegarAliquota(salarioBruto)

const valorDoImposto = calcularPorcentagem(salarioBruto, aliquotaImposto)

const valorATransferir = (salarioBruto - valorDoImposto) + valorBeneficios

print(valorATransferir)