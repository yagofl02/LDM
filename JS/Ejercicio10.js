/*Crea un script que calcule la suma de la serie 1/1 + 1/2 + 1/3 + 1/4 + ⋯ + 1/N, donde N es un número
entero mayor que cero que se pedirá por teclado. */

function calcularSerieHarmonica(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) { //recorre 
      suma += 1 / i;
    }
    return suma;
  }
  
  let n = parseInt(prompt(" número entero mayor que cero: ")); // pide un numero menor que 0
  
  while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Error.  número entero mayor que cero: ")); // si no es menor que 0 vuelve a pedirlo
  }
  
  let suma = calcularSerieHarmonica(n);
  console.log(`La suma de la serie 1/1 + 1/2 + 1/3 + ... + 1/${n} es: ${suma}`);