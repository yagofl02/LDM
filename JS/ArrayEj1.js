/*Asigna a una variable f una expresión de función que acepte un array y un número entero 
n y, usando el método slice del objeto Array recibido, retorne: 
• Los n primeros elementos del array si n es mayor o igual que cero. 
• El array completo si n es mayor o igual que la longitud del array. 
• El primer elemento del array si no recibe el segundo parámetro.  
• undefined si no recibe ningún parámetro. 
• Un array vacío si n es negativo. 
Ejecuta la función para varios casos de prueba mostrando el resultado retornado*/


let f = function(arr, n) {
    if (arr === undefined || n === undefined) {
      return undefined;
    }
    if (n < 0) {
      return [];
    }
    if (n >= arr.length) {
      return arr;
    }
    if (n === undefined) {
      return arr.slice(0, 1);
    }
    return arr.slice(0, n);
  }