
/*Dadas las variables a, b, c, d y e de tipo int, inicializadas con los valores -9, 21, -35, 51 y 
33 respectivamente, crea una sola expresión que realice las operaciones siguientes: 
• Sumar los valores almacenados en a y b y multiplicar el resultado por el valor 
almacenado en e. 
• Dividir el resultado de la operación anterior entre el resto de dividir el valor 
almacenado en d entre el valor almacenado en c. 
• Almacenar en una variable f el resultado parcial que se obtiene de la operación 
descrita en el primer punto
*/
let a = -9; //variables
let b = 21; //variables
let c = -35; //variables
let d = 51; //variables
let e = 33; //variables

let f = (a + b) * e; //suma de a y b multiplicado por e
let resultado = f / (d % c); //resultado de la operacion anterior dividido entre el resto de d entre c