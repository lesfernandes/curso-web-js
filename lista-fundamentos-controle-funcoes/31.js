/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */

const numerosNegativos = (numeros) => {
    let contador = 0
    for(let n in numeros) {
        if (numeros[n] < 0) {
            contador++
        }
    }
    return contador
}

let numeros = [-2, -1, 0, 1, 2]
console.log(numerosNegativos(numeros) + " números negativos.")