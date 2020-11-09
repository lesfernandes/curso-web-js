/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

let numeros = [1, 2, 4, 5, 6]

const maiorEMenor = (numeros) => console.log("Maior: " + Math.max.apply(null, numeros) + "\nMenor: " + Math.min.apply(null, numeros))

maiorEMenor(numeros)