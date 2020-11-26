/*
    Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
    ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
    exemplo a seguir:
*/
function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverter({a: 1, b: 2, c: 3}))