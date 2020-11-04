const bhaskara = (a, b, c) => {

    let delta = (b ** 2) - (4 * a * c)

    if (delta < 0 ){
        return "Delta é negativo"
    }

    let x1 = ((b * -1) + Math.sqrt(delta)) / 2 * a
    let x2 = ((b * -1) - Math.sqrt(delta)) / 2 * a

    return [x1, x2]
}

console.log(bhaskara(1, 2, 3))
console.log(bhaskara(1, -1, -6))