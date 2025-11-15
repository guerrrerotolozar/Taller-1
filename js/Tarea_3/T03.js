// De una lista de numeros dada buscar el mayor
const numeros = [ 6, 2, 0, 9, 2, 5, -4, 12 ];
menor = 0
// for (let k of numeros){
// if (k > menor){
//         menor = k
//     }
// }
// console.log(menor + " este es el mayor")

// for (let k of numeros){
//     if (k < menor){
//         menor = k
//     }
// }
// console.log(menor + " este es el menor")

const lista = []
function buscamenor (){
    if (numeros.length === 0) return;  //ya que estare eliminando del array, si no hay nada que leer, que la funcion frene TOTAL

    let alo = numeros[0];

    for (let k of numeros){
        if (k < alo){
            alo = k;
        }
    }
lista.push(alo);

const index = numeros.indexOf(alo);  // funcion de la IA, entiendo que es para buscar el indice de el elemento obtenido en el bucle anterior

if (index !== -1)  // esto no lo entendi
    { numeros.splice(index, 1); }
    buscamenor()
}
buscamenor()
console.log(lista)








                                                                             
// let listaMenor = []
// for (let k of numeros){
//     if (k > alo){
//         listaMenor.push(k)
//     }
//     else {
//         listaMenor.unshift(k)
//     }
// }
// console.log(listaMenor)

// let listaMayor = []
// for (let k of numeros){
//     if (k < alo){
//         listaMayor.push(k)
//     }                                            PENSE QUE SI PERO NO, SIGUE EN DESORDEN
//     else {
//         listaMayor.unshift(k)
//     }
// }
// console.log(listaMayor)