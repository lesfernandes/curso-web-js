// pessoa -> endereco de memoria -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' // não há mudança na constante PESSOA
console.log(pessoa)

// pessoa -> endereco de memoria diferente -> {...} 
// pessoa = { nome: 'Ana' } // erro, pois pessoa é uma constante

Object.freeze(pessoa) // não conseguimos mexer no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

