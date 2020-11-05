/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const juroSimples = (capital, taxa, tempo) => capital + (capital * taxa * tempo)
const juroComposto = (capital, taxa, tempo) => capital * ((1 + taxa) ** tempo)

console.log(juroSimples(1000, 10/100, 10))
console.log(juroComposto(1000, 10/100, 10))