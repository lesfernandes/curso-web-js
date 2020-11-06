/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function calculaMedia(nota1, nota2, nota3) {
    let maiorNota = Math.max(nota1, nota2, nota3)
    let media = 0

    if(nota1 == maiorNota) {
        media = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
    }

    if(nota2 == maiorNota){
        media = (nota2 * 0.4) + (nota1 * 0.3) + (nota3 * 0.3)
    }

    if(nota3 == maiorNota) {
        media = (nota3 * 0.4) + (nota1 * 0.3) + (nota2 * 0.3)
    }
    
    return media

}

function imprimeNota(codigo, nota1, nota2, nota3) {
    let media = calculaMedia(nota1, nota2, nota3)
    let resultado = "Código do Aluno: " + codigo +
                    "\nNota 1: " + nota1 +
                    "\nNota 2: " + nota2 +
                    "\nNota 3: " + nota3 +
                    "\nMédia: " + media

    if (media >= 5) {
        resultado += "\nAPROVADO"
    } else {
        resultado += "\nREPROVADO"
    }

    return resultado
}

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let codigo = 0

while (codigo >= 0) {
    console.log(imprimeNota(codigo, 5, 4, 3))
    codigo = getInteiroAleatorioEntre(-1, 10)
}

