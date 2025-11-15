
// Base de Datos

const entrenadores = [
    { profe: 'Lucía', deporte: 'Natación', alumnos: ['Pedro', 'Sofía', 'Marta'] },
    { profe: 'Julián', deporte: 'Fútbol', alumnos: ['Andrés', 'Carlos', 'Luisa', 'Diego'] },
    { profe: 'Valentina', deporte: 'Tenis', alumnos: ['Laura', 'Camilo'] },
    { profe: 'Esteban', deporte: 'Atletismo', alumnos: ['Paula', 'Jorge', 'Diana', 'Sebastián'] },
    { profe: 'Andrea', deporte: 'Yoga', alumnos: ['Fernanda', 'Cecilia'] },
];

// Desestructuracion
// for ( let k of entrenadores){
//     let {profe:p,deporte:d,alumnos:a} = k

//     console.log(`El profe ${p} enseña ${d} y sus alumnos son ${a}`)
// }

// for ( let i = 0; i < entrenadores.length; i++){
//     let respuesta = `` // Espacio para guardar cada bucle // FOR normal
//     let { profe:P,deporte:D,alumnos:A} = entrenadores[i]


//     console.log/*respuesta +=*/(`El profe ${P} enseña ${D} y sus alumnos son ${A}`)
// }
//MISMO BUCLE PERO DENTRO DE UNA FUNCION
function init(){
    for ( let i = 0; i < entrenadores.length; i++){
        let respuesta = `` // Espacio para guardar cada bucle // FOR normal
        let { profe:P,deporte:D,alumnos:A} = entrenadores[i]
    
    
        /*console.log*/respuesta +=(`El profe ${P} enseña ${D} y sus alumnos son ${A}`)
    }
    return init()
}
init([0])
