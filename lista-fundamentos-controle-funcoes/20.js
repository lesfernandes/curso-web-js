/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

function saque(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorNota = calculaValorNota(valor)

    while (valor >= valorNota) {
        switch(valorNota) {
            case 100:
                valor -= valorNota
                nota100++
                break
            case 50:
                valor -= valorNota
                nota50++
                break
            case 10:
                valor -= valorNota
                nota10++
                break
            case 5:
                valor -= valorNota
                nota5++
                break
            case 1:
                valor -= valorNota
                nota1++
                break
        }

        valorNota = calculaValorNota(valor)
    }

    return mostrarCedulas(nota100, nota50, nota10, nota5, nota1)
}

function calculaValorNota(valor) {
    if(valor >= 100){
        valorNota = 100
    } else if (valor >= 50) {
        valorNota = 50
    } else if (valor >= 10) {
        valorNota = 10
    } else if (valor >= 5) {
        valorNota = 5
    } else if (valor >= 1) {
        valorNota = 1
    }

    return valorNota
}

function mostrarCedulas(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ""

    if(nota100 > 0) {
        resultado += nota100 + " nota(s) de R$ 100,00."
    }

    if(nota50 > 0) {
        resultado += "\n" + nota50 + " nota(s) de R$ 50,00."
    }

    if(nota10 > 0) {
        resultado += "\n" + nota10 + " nota(s) de R$ 10,00."
    }

    if(nota5 > 0) {
        resultado += "\n" + nota5 + " nota(s) de R$ 5,00."
    }

    if(nota1 > 0) {
        resultado += "\n" + nota1 + " nota(s) de R$ 1,00."
    }

    return resultado
}

console.log(saque(18))