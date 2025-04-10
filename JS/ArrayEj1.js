/*Asigna a una variable f una expresión de función que acepte un array y un número entero 
n y, usando el método slice del objeto Array recibido, retorne: 
• Los n primeros elementos del array si n es mayor o igual que cero. 
• El array completo si n es mayor o igual que la longitud del array. 
• El primer elemento del array si no recibe el segundo parámetro.  
• undefined si no recibe ningún parámetro. 
• Un array vacío si n es negativo. 
Ejecuta la función para varios casos de prueba mostrando el resultado retornado*/


let f = function(arr, n) {  // funcion que recibe un array y un numero entreo
    if (arr === undefined || n === undefined) {
      return undefined;
    }
    if (n < 0) { //si es menor que 0 lo devuelve vacio
      return [];
    }
    if (n >= arr.length) { //si es mayor o igual que la longitud del array lo devuelve completo
      return arr; 
    }
    if (n === undefined) { //si no recibe el segundo parametro devuelve el primer elemento
      return arr.slice(0, 1);
    }
    return arr.slice(0, n);
}
