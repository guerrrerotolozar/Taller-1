var numero = prompt("Ingresa un numero que creas que es multiplo de 5 =>")
var numero = +numero  //no se porquje pero esta vez toco re<signarle el valor a la variable asi porque estaba mandando el numero + un undefinend

if (numero % 5 == 0){
    console.log("si es")
}
else{
    console.log("no es")
}