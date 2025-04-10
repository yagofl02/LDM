/*Crea una función que acepte un array de objetos de tipo {autor: '...', título: '...', id: n} y 
ordene su contenido por autor.*/

const f = (arr) => {
    if (arr === undefined) return undefined; //i no hay parametros devuelve undefined
    return arr.sort((a, b) => a.autor.localeCompare(b.autor)); //ordena los arrays por autor
  }    
  