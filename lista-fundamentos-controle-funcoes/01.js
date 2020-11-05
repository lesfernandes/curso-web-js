/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
subtração, multiplicação e divisão desses valores. */

const operacoes = (x, y) => {
    console.log("Soma: " + (x+y) + 
                "\nSubtração: " + (x-y) + 
                "\nMultiplicação: " + (x*y) +
                "\nDivisão: " + (x/y)) 
}

operacoes(10, 5)