// O fato da função não explicitar algum parâmetro, não significa 
// que não podemos passar um parâmetro.

function soma() {
    let soma = 0
    // Toda função possui o array interno arguments
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma("a", "b", "c"))
