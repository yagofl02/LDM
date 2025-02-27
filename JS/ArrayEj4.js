/*Crea una función que acepte un array y desordene (baraje) sus elementos.*/

const f = arr => {
    if (arr === undefined) return undefined;
    return arr.sort(() => Math.random() - 0.5);
}

console.log(f([1, 2, 3, 4, 5]));

console.log(f([1, 2, 3, 4, 5]));
