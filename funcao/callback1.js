const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log((indice + 1) + '. ' + nome)
}

// Callback é chamar uma função que será executada quando um evento acontecer.
// Neste caso o evento é o looping.
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))