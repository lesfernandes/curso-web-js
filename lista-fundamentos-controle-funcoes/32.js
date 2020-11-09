/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

let numeros = [1, 2, 4, 5, 6]

const media = (numeros) => {
    let resultado, soma = 0

    for(let n in numeros) {
        soma += numeros[n]
    }
    
    resultado = soma/numeros.length

    return resultado
}

console.log("Média: " + media(numeros))