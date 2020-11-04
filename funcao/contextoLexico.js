const valor = 'Global'

// A função carrega a informação do contexto de quando e onde foi declarada.
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()