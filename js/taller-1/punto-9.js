let n = prompt("numero a finalizar bucle");
n = +n

let lista = [];


for ( let i = 1; i <= n; i++){
    lista.push(i);
    // document.write(i);
    console.log(lista)
}

// lista.splice(1,1); ===> no lo vimos en clase pero se me hace mas eficiente

// let primero = lista.shift();  \
// lista.shift();                 > lo del unshift TAMPOCO lo vimos, ya vi dos de youtube y no le encuentro el comoooooo, ni el gpt sabe como
// lista.unshift(primero);       /



console.log(lista)
// document.write(n);  ==> no sirven en este caso, se bugean
