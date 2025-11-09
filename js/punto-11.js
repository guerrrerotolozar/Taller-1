const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];
// escribe tu código acá

let contador = 0

for (let k of nums) {
    if (k == 1) {
        contador++;
    }
}

document.write(contador)
console.log(contador)