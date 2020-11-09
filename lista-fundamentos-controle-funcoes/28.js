/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

let inteiros = [1, 2, 3, 4, 5, 6, 7, 8]

function verificaParesEImpares (inteiros) {
    for(let i in inteiros) {
        if (inteiros[i] % 2 == 0) {
            console.log(inteiros[i] + " é par!")
        } else {
            console.log(inteiros[i] + " é ímpar!")
        }
    }
}

verificaParesEImpares(inteiros)