class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularImc () {

        return this.peso / (this.altura*this.altura)
    }
    classificarImc(){
        const imc = this.calcularImc();
        if (imc < 18) {
            return 'Você está abaixo do peso'
        } else if (imc >= 18 && imc <=24.9) {
             return 'Você está com o peso normal'
        } else if ( imc > 24.9 && imc < 30) {
             return 'Você está obeso'
        } else 
            return 'Você está com obesidade grau 1'
        
    }

}

const lucas = new Pessoa('Lucas', 137, 1.81)
const vitor = new Pessoa('Vitor', 89, 1.75 )

console.log(lucas.classificarImc())
console.log(vitor.classificarImc())
