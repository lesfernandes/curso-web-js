const escola = "Dom José"

// Letra que está no índice 4.
console.log(escola.charAt(4))

// Índice inexistente.
console.log(escola.charAt(7))

// Valor do índice na tabela ASCII.
console.log(escola.charCodeAt(3));

// Descobrir o índice de um caractere ou número.
console.log(escola.indexOf('é'))

// Quebrar a partir de um índice.
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// Concatenação.
console.log("Colégio ".concat(escola).concat("!"))
console.log("Colégio " + escola+"!")

// Substituição.
console.log(escola.replace('o', 'e'))

// Converter string em array.
console.log('Ana,Maria,Pedro'.split(','))