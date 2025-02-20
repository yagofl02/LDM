
/* Crea un script que genere los primeros N términos de la secuencia de Fibonacci y los 
muestre en la consola, siendo N un número introducido por teclado. */

function generarSecuenciaFibonacci(n) {
    const secuencia = [0, 1];
  
    for (let i = 2; i < n; i++) {
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }
  
    return secuencia;
  }
  
  function main() {
    const n = parseInt(prompt("Introduce el número de términos de la secuencia de Fibonacci: "));
    const secuencia = generarSecuenciaFibonacci(n);
  
    console.log(`Los primeros ${n} términos de la secuencia de Fibonacci son:`);
    console.log(secuencia);
  }
  
  main();