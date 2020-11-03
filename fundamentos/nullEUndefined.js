console.log('TESTES NO BROWSER')
const a = {name: 'Teste'}
console.log(a)

/*  
    A constante 'b' está armazenado no endereço de memória em que 'a' está armazenado.

    Ambas constantes referenciam o mesmo objeto, logo se mudarmos o 'b' o 'a' irá mudar
    e vice-versa.
*/
const b = a
b.name = 'Opa'
console.log(b.name)
console.log(a)

/*
    Neste caso abaixo, a cópia foi feita pelo valor e não pelo endereço de memória
    visto que está sendo usado um tipo primitivo.
*/
let c = 3
let d = c
d++
console.log(d, c)

/* ------------------------------------------------------------------------------------------- */
console.log('--------------------------------------------------------------------------------')
console.log('REALIZADO NA IDE')

let valor // não inicializada (undefined)
console.log(valor)

valor = null // não possui valor e não aponta para nenhum endereço de memória
console.log(valor)

//console.log(valor.toString()) //Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, usar null
console.log(!!produto.preco)
// delete produto.preco // usar essa forma para deletar
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)

