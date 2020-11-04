console.log(soma(3, 4))

// Function declaration.
// Carrega todas as funções declaradas desta forma antes de executar o código.
function soma(x, y) {
    return x + y
}

// Function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// Named function expression.
// Uso reduzido.
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))