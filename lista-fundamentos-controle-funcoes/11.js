/* As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function verificaAnoBissexto(ano) {
    if (ano % 4 == 0 && ((ano % 100 != 0) || (ano % 400 == 0))) {
        console.log("O ano " + ano + " é bissexto.")
        return true
    }

    console.log("O ano " + ano + " não é bissexto.")
    return false
}

verificaAnoBissexto(2016)
verificaAnoBissexto(1600)
verificaAnoBissexto(2017)
verificaAnoBissexto(1900)
verificaAnoBissexto(1200)