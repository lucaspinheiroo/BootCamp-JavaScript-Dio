function calcularImc( peso, altura) {
    return peso / (altura * altura)
}
function ClassificarImc (imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso ideal.'
    } else if (imc > 18.5 && imc < 25) {
        return 'Peso ideal'
    } else if ( imc > 25 && imc < 30) {
        return 'Acima do peso'
    } else if (imc > 30 && imc < 40) {
        return 'Você está obeso'
    } else {
         return 'Obesidade grave'
    }
       
}
(function() {
    let peso = 90
    let altura = 1.81
    
    const imc = calcularImc(peso, altura)
    console.log(ClassificarImc(imc))
}) ()





    

