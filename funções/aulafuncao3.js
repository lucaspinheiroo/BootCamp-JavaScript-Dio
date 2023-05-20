

function verificarIdade (idade){
    if(idade >= 18) {
        return 'Maior de Idade'
    } else {
        return 'Menor de Idade'
    }
    }
    
    idade = 17
    console.log('A pessoa é ' + verificarIdade(idade))