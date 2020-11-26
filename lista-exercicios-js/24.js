/*
    Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
    que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
    minúsculas.
*/
const contarCaractere = (caractereBuscado, frase) => [...frase].filter(caractere => caractere === caractereBuscado).length
console.log(contarCaractere("r", "A sorte favorece os audazes"))