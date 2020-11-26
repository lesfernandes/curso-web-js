/*
    Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
    pares e que também tenham índices pares.
*/
function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 2, 3]))
    