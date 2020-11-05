/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function verificaDia(dia) {
    switch(dia) {
        case 7: case 1:
            return "Fim de Semana"
        case 2: case 3: case 4: case 5: case 6:
            return "Dia útil"
        default:
            return "Dia inválido"
    }
}

console.log(verificaDia(1))
console.log(verificaDia(2))
console.log(verificaDia(3))
console.log(verificaDia(4))
console.log(verificaDia(5))
console.log(verificaDia(6))
console.log(verificaDia(7))
console.log(verificaDia(8))




