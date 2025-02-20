/*Crea un script que calcule la suma de la serie 1/1 + 1/2 + 1/3 + 1/4 + ⋯ + 1/N, donde N es un número
entero mayor que cero que se pedirá por teclado. */

function calcularSerieHarmonica(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += 1 / i;
    }
    return suma;
  }
  
  let n = parseInt(prompt("Ingrese un número entero mayor que cero: "));
  
  while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Error. Ingrese un número entero mayor que cero: "));
  }
  
  let suma = calcularSerieHarmonica(n);
  console.log(`La suma de la serie 1/1 + 1/2 + 1/3 + ... + 1/${n} es: ${suma}`);