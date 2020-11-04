const converteDinheiro = valor => {
    return "R$ " + valor.toFixed(2).toString().replace(".", ",")
}

console.log(converteDinheiro(0.30000000000000004))
