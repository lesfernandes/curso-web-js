/*
    Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
    consoantes, ou seja, sem as vogais.
*/
const removerVogais = (frase) =>  frase.replace(/[aeiou]/ig, '')
console.log(removerVogais("Fundamentos"))