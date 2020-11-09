/* Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. */

function progAritmetica(n, a1, r) {
    let soma = 0

    for(let i = 1; i <= n; i++){
        num = a1 + (i - 1) * r
        soma += num
        console.log(i + "º termo = " + num)
    }

    console.log("Soma dos elementos = " + soma)
}

function progGeometrica(n, a1, r) {
    let soma = 0

    for(let i = 1; i <= 10; i++) {
        num = a1 * (r ** (i - 1))
        soma += num
        console.log(i + "º termo = " + num)
    }

    console.log("Soma dos elementos = " + soma)
}

progAritmetica(10, 1, 2)
progGeometrica(10, 1, 2)