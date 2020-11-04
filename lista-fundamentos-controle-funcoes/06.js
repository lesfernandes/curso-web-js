const juroSimples = (capital, taxa, tempo) => capital + (capital * taxa * tempo)
const juroComposto = (capital, taxa, tempo) => capital * ((1 + taxa) ** tempo)

console.log(juroSimples(1000, 10/100, 10))
console.log(juroComposto(1000, 10/100, 10))