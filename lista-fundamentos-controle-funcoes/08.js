function verificaRecordeEPiorJogo(lista) {

    lista = lista.split(" ")

    for(let i in lista) {
        lista[i] = parseInt(lista[i])
    }

    console.log(Math.max.apply(null, lista))

    return lista
}

console.log(verificaRecordeEPiorJogo("10 20 20 8 25 3 0 30 1"))