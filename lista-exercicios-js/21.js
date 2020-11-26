/*
    Criar uma função que receba um array de números e retorne o menor número desse array.
*/
const menorNumero = (array) => array.map(Number).reduce((n1, n2) => Math.min(n1, n2))
console.log(menorNumero([1, 2, 3, 4, 5, 6]))