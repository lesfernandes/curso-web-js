/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const juroComposto = (capital, taxa, tempo) => capital * ((1 + taxa) ** tempo)

function calculaAnuidade(mes, valor) {
    let taxa = 0.05
    let tempoAtraso = mes - 1

    if (mes == 1) {
        return valor
    } else {
        return juroComposto(valor, taxa, tempoAtraso)
    }
}

console.log(calculaAnuidade(1, 1000))
console.log(calculaAnuidade(2, 1000))
console.log(calculaAnuidade(3, 1000))