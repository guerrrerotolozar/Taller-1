const estudiantes = [
    { nombre: 'Gabriel', materia: 'Logica', notas: [ 3.4, 1.2, 3.7, 4.1, 3.3 ] },       // 0
    { nombre: 'Nilson', materia: 'Logica', notas: [ 4, 2, 2.7, 5 ] },                   // 1
    { nombre: 'Kevin', materia: 'Logica', notas: [ 3, 3.1, 3.1, 1, 5, 5 ] },            // 2
    { nombre: 'Ramiro', materia: 'Logica', notas: [ 2.7 ] },                            // 3
    { nombre: 'Andres', materia: 'Logica', notas: [ 4.3, 2.5, 3.2 ] }                   // 4
];

function sumarNotas ( listaNotas ) {
    let sumaNotas = 0;
    
    for( let nota of listaNotas ) {
        sumaNotas = sumaNotas + nota;
        //sumaNotas += nota;  === > ABREVIATURA 
    }

    return sumaNotas;
}

function calcularPromedio( total, cantidadNotas ) {
    return ( total / cantidadNotas ).toFixed( 1 );  
    // Redondear, mantiene la cantidad de decimales que se le indique
}

for (let alumno of estudiantes) {

    // Las segunas partes se pueden cambiar el nombre para mejor sintaxis //

    let {nombre:/*ESTE nombreLista #1*/nombreLista,notas:/*ESTE notasLista #2*/notasLista} = alumno;                            
    let notaParcial = sumarNotas(notasLista);
    let notaFinal = calcularPromedio(notaParcial, estudiantes.length); // necesita dos valores

console.log( `La nota final de  ${/*ES ESTE #1*/nombreLista},  es ${/*ES ESTE #2*/ notaFinal} ` );
}