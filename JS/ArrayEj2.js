/*Asigna a una variable f una expresión de función que acepte un array y un número entero 
n y, usando el método slice del objeto Array recibido, retorne: 
• Los n últimos elementos del array si n es mayor o igual que cero. 
• El array completo si n es mayor o igual que la longitud del array o negativo. 
• El último elemento del array si no recibe el segundo parámetro.  
• undefined si no recibe ningún parámetro. 
Ejecuta la función para varios casos de prueba mostrando el resultado retornado.*/

const f = (arr, n) => { //funcion que recibe un array y un numero entero
    if (arr === undefined) return undefined;  //si no recibe ningun parametro devuelve undefined
    if (n === undefined) return arr.slice(-1); // si no recibe el segundo parametro devuelve el ultimo elemento
    if (n >= arr.length || n < 0) return arr;// si es mayor o igual que la longitud del array o negativo lo devuelve completo
    return arr.slice(-n); // si no devuelve los n ultimos elementos
  }

