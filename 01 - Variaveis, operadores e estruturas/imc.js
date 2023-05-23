
let peso = 90
let altura = 1.81

let imc = peso / (altura * altura)

console.log(`Seu imc é ${imc.toFixed(1)}`)

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal.')
} else if (imc > 18.5 && imc < 25) {
    console.log('Peso ideal')
} else if ( imc > 25 && imc < 30) {
    console.log('Acima do peso')
} else if (imc > 30 && imc < 40) {
    console.log('Você está obeso')
} else
    console.log('Obesidade grave')

    

