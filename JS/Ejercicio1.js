
/*Dadas las variables a, b, c, d y e de tipo int, inicializadas con los valores -9, 21, -35, 51 y 
33 respectivamente, crea una sola expresión que realice las operaciones siguientes: 
• Sumar los valores almacenados en a y b y multiplicar el resultado por el valor 
almacenado en e. 
• Dividir el resultado de la operación anterior entre el resto de dividir el valor 
almacenado en d entre el valor almacenado en c. 
• Almacenar en una variable f el resultado parcial que se obtiene de la operación 
descrita en el primer punto
*/
let a = -9;
let b = 21;
let c = -35;
let d = 51;
let e = 33;

let f = (a + b) * e;
let resultado = f / (d % c);