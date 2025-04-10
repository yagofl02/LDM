/*Crea una función que acepte un array y desordene (baraje) sus elementos.*/

const f = arr => { //
    if (arr === undefined) return undefined; //si no recibe ningun parametro devuelve undefined
    return arr.sort(() => Math.random() - 0.5);
}

console.log(f([1, 2, 3, 4, 5])); //muestra por pantalla un ejemplo

console.log(f([1, 2, 3, 4, 5]));// muestro por pantalla otro ejemplo
