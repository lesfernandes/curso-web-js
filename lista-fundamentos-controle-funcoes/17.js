/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

function ajustarSalario(plano, salarioAtual){
    switch(plano) {
        case 'A':
            return 1.1 * salarioAtual
        case 'B':
            return 1.15 * salarioAtual
        case 'C':
            return 1.2 * salarioAtual
        default:
            return "Plano Inválido"
    }
}

console.log(ajustarSalario('A', 1000))
console.log(ajustarSalario('B', 1000))
console.log(ajustarSalario('C', 1000))
console.log(ajustarSalario('D', 1000))