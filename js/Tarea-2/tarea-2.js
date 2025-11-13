// Calcular el IMC (Indice de Masa Corporal)
//  Formula ==> IMC = peso(kg) / altura(m)^2.
import pacientes from "../datos"
import calcularIMC from "../imc";


for (let alumno of pacientes) {

    // Las segunas partes se pueden cambiar el nombre para mejor sintaxis //

    let {nombre:nombreQ,peso:pesoQ,altura:alturaQ} = alumno;                            
    console.log( `El IMC de  ${nombreQ},  es ${calcularIMC(pesoQ,alturaQ).toFixed(2)} ` );
}


// 1. Iterar la lista de pacientes

// 1.2 Pasar los valores extraidos a la funcion calcularIMC (formula)
// 1.3 Listar nombre del paciente y el IMC 
