/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

function verificaIntervalo(numeros) {
    let qtdeDentroIntervalo = 0, qtdeForaIntervalo = 0

    for (let n in numeros) { 
        if (numeros[n] >= 10 && numeros[n] <= 20) { 
            qtdeDentroIntervalo++
        } else {
            qtdeForaIntervalo++
        }
    }

    return qtdeDentroIntervalo + " números estão dentro do intervalo. \n"
            + qtdeForaIntervalo + " números estão fora do intervalo."
}

let numeros = [1, 11, 13, 16, 20, 24]

console.log(verificaIntervalo(numeros))