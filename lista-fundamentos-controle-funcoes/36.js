/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5. */

const multiplicaVetor = (vetor, numero) => {
    let resultado = vetor
    for(let n in resultado) {
        resultado[n] *= numero
    }
    return resultado 
};

const multiplicaVetorMaior5 = (vetor, numero) => {
    let resultado = vetor
    for(let n in resultado) {
        if(resultado[n] > 5) {
            resultado[n] *= numero
        }
    }
    return resultado 
};

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numero = 2

console.log(multiplicaVetor(vetor, numero))
console.log(multiplicaVetorMaior5(vetor, numero))