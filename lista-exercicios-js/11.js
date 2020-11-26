/*
    Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
    array:
*/
const receberPrimeiroEUltimoElemento = (array) => [].concat(array[0], array[array.length - 1])
console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))