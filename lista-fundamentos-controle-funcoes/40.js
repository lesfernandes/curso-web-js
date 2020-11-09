/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

let notas = [4, 6, 8, 10]

function atribuiConceito(notas) {
    let conceitos = []
    for(let n in notas) {
        if(notas[n] <= 4.9) {
            conceitos[n] = 'D'
        } else if (notas[n] <= 6.9) {
            conceitos[n] = 'C'
        } else if (notas[n] <= 8.9) {
            conceitos[n] = 'B'
        } else if (notas[n] <= 10){
            conceitos[n] = 'A'
        }
    }
    return [notas, conceitos]
}

console.log(atribuiConceito(notas))