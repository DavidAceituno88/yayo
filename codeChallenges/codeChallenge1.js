/*tasks
1- Crear funcion printTotalCount(stringDado, charDado)
la cual cuenta las occurrencias del charDado dentro del stringDado*/

const printTotalCount = function(stringDado, charDado) {
    let counter = 0;
    // Iterar sobre el stringDado con formato de lowercase
    for(let i = 0 ; i < stringDado.length ; i++){
        if(charDado.toLowerCase() === stringDado[i].toLowerCase())
        //incrementa el valor del contador cada que encuentre una coinsidencia
            counter++
    }    
    console.log(`Se encontraron ${counter} coincidencias del caracter "${charDado}" en la palabra "${stringDado}"`)
// creo una variable 'palabras' para almacenar la cantidad de palabras del stringDado
    const palabras = stringDado.split(' ').length;
    console.log(`La cantidad de palabras dentro del stringDado es : "${palabras}"`)
}


let result = printTotalCount('FUERZA rayos del Necaxa', 'a');
