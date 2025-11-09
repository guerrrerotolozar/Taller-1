let nombres = ["Pedro","Pablo","Maria","Juan","Diana"]

var nuevoNombre = prompt("ingresa un nuevo nombre")
nombres.push(nuevoNombre)
// document.write(nombres)

var otronombre = prompt("ingresa otro nuevo nombre")
nombres[2] = otronombre
// document.write(nombres)

for( let index in nombres ) {
    console.log( index, nombres[ index ] );
    document.write( index, nombres[ index ] );

}
