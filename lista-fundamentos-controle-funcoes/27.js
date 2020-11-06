/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function comparaCrescimento(altura1, altura2, taxa1, taxa2) {
    let maiorAltura
    let menorAltura

    if(altura1 > altura2) {
        maiorAltura = altura1
        menorAltura = altura2
    } else {
        maiorAltura = altura2
        menorAltura = altura1
    }
}