let dobro = function (a) {
    return 2 * a
}

// A função arrow é sempre anônima, se quisermos chamá-la 
// teremos que armazenar ela em uma variável ou constante
dobro = (a) => {
    return 2 * a
}

// O corpo da função pode ser retirado no caso de uma sentença
// e o return pode ser implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parâmetro, mas no js os parâmetros podem ser ignorados

console.log(ola())