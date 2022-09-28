const numero= [2, 3, 4, 5, 6, 7, 8, 9, 10]
let sumar=0
for (let index = 0; index < numero.length; index++) {
    const actual = numero[index];
    if (actual % 2==0) {
        sumar = sumar + actual
        
    }
    
}
console.log(sumar)