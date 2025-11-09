const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá

let list = []


// FOR OF es para buscar sobre los elementos/valores de una lista
// FOR IN es para buscar sobre el indice/posicion de las cosas sobre una lista

for ( k of nums ){ // Revisa los valores de NUMS y guardalos en K <=_
    if (k > 10){ // si el numero guardado en K cumple la condicion    \
        list.push(k) // realiza el push a la lista nueva               |
    } // retoma el bucle y el espacio virtual en k se reinicia      __/
}

document.write(list)
console.log(list)