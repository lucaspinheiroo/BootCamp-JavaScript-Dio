
const preco = 100
const debito = (preco) - ((10/100)*preco)
const dinPix = (preco) -  ((15/100) * preco)
const duasvezes = (preco)
const acimaDeDuas = (preco) + ((10/100) * preco)

let pag = acimaDeDuas;

if (pag == debito) {
    console.log(debito)
} else if (pag == dinPix) {
    console.log(dinPix)
} else if( pag == duasvezes) {
    console.log(duasvezes)
} else {
    console.log(acimaDeDuas)
}