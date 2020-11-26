/*
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
    que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/
const repetir = (repeticao, vezes) => {
    let resultado = []
    for(let i = 0; i < vezes; i++) resultado.push(repeticao)
    return resultado
}
console.log(repetir("código", 2))