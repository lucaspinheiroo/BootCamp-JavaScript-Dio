const { gets, print } = require("./funçoes-auxiliares");

const n = gets();

let maiorValorPar = null;
let menorValorImpar = null;

for (let i = 0; i < n; i++) {
  const numero = gets();

  if (numero % 2 === 0) {
    if(maiorValorPar === null || numero > maiorValorPar) {
        maiorValorPar = numero
    }
  } else {
    if (menorValorImpar === null || numero < menorValorImpar) {
      menorValorImpar = numero;
    }
  } 
}

print(`O maior valor par é : ${maiorValorPar}`)
print(`O menor valor Impar é : ${menorValorImpar}`)
