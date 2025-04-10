/*Crea un script que lea nombres por teclado y muestre el resultado de sustituir los 
caracteres centrales (todos menos el primero y el último) por asteriscos. Se ha de tener 
en cuenta que cada nombre puede estar precedido y/o seguido de un número arbitrario de 
espacios en blanco y que, de ser así, estos no aparecerán en el resultado.*/

const readline = require('readline');

const rl = readline.createInterface({ //crea un interfaz para leer la linea
    input: process.stdin,
    output: process.stdout
});
 
rl.question('introduce un nombre: ', (nombre) => { // pregunta para poner el nombre

    const nombreSinEspacios = nombre.trim(); // le quita los espacios


    const resultado = sustituirCaracteresCentrales(nombreSinEspacios); //crea una variable con los resultados

    console.log(resultado);//muestra el resultado

    rl.close();
});

function sustituirCaracteresCentrales(nombre) { //funcion para sustitur
    if (nombre.length <= 2) {
        return nombre;
    }

    const primerCaracter = nombre[0]; //primer caracter
    const ultimoCaracter = nombre[nombre.length - 1]; //ultimo
    const asteriscos = '*'.repeat(nombre.length - 2); //los del medio que se sustituyen por asteriscos

    return `{primerCaracter}${asteriscos}${ultimoCaracter}`; //devuelve el resutado
}


