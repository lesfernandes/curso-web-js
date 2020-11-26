/*
    Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
    array recebido como parâmetro.
*/
const isNumber = (num) => typeof num == "number"
const filtrarNumeros = (array) => array.filter(isNumber)
console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))