/* Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

function comparaCrescimento(altura1, altura2, taxa1, taxa2) {
    if (altura1 == altura2) {
        return "As crianças possuem as mesmas alturas."
    } else {
        let menorAltura = (altura1 < altura2) ? altura1 : altura2
        let taxaMenorAltura = (altura1 < altura2) ? taxa1 : taxa2
        let maiorAltura = (altura2 > altura1) ? altura2 : altura1
        let anos = 0
        
        while(menorAltura < maiorAltura) {
            menorAltura += taxaMenorAltura
            anos ++
        }

        return anos + " anos para a menor criança ultrapassar a maior."
    }
}

console.log(comparaCrescimento(120, 130, 5, 2))