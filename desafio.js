const numeros = [13, 0, 12, 9, 16, 6, 11, 2]
let sumar = 0
for (let index = 0; index < numeros.length; index++) {
    const actual = numeros[index];
    if (actual > 10) {
        sumar = sumar + actual
    }
} 

console.log(sumar) 