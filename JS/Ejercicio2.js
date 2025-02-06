/*Dadas las variables a, b, c y d de tipo int, escribe dos expresiones distintas, pero que 
ambas retornen true si a es menor que b o c es distinto de d.*/

let a = 5;
let b = 10;
let c = 15;
let d = 15;

console.log("Expresión 1:", (a < b) || (c !== d));
console.log("Expresión 2:", ((a < b) || (c !== d)));

a = 15;
b = 10;
c = 15;
d = 20;

console.log("Expresión 1 (cambio de valores):", (a < b) || (c !== d));
console.log("Expresión 2 (cambio de valores):", ((a < b) || (c !== d)));