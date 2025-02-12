/*Crea un script que lea nombres por teclado y muestre el resultado de sustituir los 
caracteres centrales (todos menos el primero y el último) por asteriscos. Se ha de tener 
en cuenta que cada nombre puede estar precedido y/o seguido de un número arbitrario de 
espacios en blanco y que, de ser así, estos no aparecerán en el resultado.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('introduce un nombre: ', (nombre) => {

    const nombreSinEspacios = nombre.trim();


    const resultado = sustituirCaracteresCentrales(nombreSinEspacios);

    console.log(resultado);

    rl.close();
});

function sustituirCaracteresCentrales(nombre) {
    if (nombre.length <= 2) {
        return nombre;
    }

    const primerCaracter = nombre[0];
    const ultimoCaracter = nombre[nombre.length - 1];
    const asteriscos = '*'.repeat(nombre.length - 2);

    return `{primerCaracter}${asteriscos}${ultimoCaracter}`;
}


