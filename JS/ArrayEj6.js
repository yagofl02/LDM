/*Crea una función que acepte un array de cualquier número de dimensiones y lo aplane 
retornando el resultado de almacenar todos sus elementos en un nuevo array 
unidimensional.*/

const f = arr => {
    if (arr === undefined) return undefined;
    return arr.flat(Infinity);
}
