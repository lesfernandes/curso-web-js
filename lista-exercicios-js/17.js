/*
    Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
*/
const somarNumeros = (numeros) => numeros.reduce((total, valor) => total + valor)
console.log(somarNumeros([10, 10, 10]))