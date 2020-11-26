/*
    Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
    multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/
const multiplicar = (num1, num2) => {
    let resultado = 0
    if((num1 >= 0 && num2 >= 0)) {
        for(let i = 1; i <= num1; i++) {
            resultado += num2
        }
    }
    return resultado
}
console.log(multiplicar(5, 5))
console.log(multiplicar(0, 5))