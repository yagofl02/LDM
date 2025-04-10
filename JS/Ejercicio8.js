
/* Crea un script que genere los primeros N términos de la secuencia de Fibonacci y los 
muestre en la consola, siendo N un número introducido por teclado. */

function generarSecuenciaFibonacci(n) {
    const secuencia = [0, 1]; //array con los dos primeros elementos de la secuencia de fibonacci
  
    for (let i = 2; i < n; i++) { 
      secuencia.push(secuencia[i - 1] + secuencia[i - 2]); //añade los siguientes elemenetos a la seceuncia
    }
  
    return secuencia;
  }
  
  function main() {
    const n = parseInt(prompt("Introduce el número de términos de la secuencia de Fibonacci: ")); // poner ka cantidad de numeros de la secuencia
    const secuencia = generarSecuenciaFibonacci(n);
  
    console.log(`Los primeros ${n} términos de la secuencia de Fibonacci son:`); //muestra por pantalla los primeros n terminos de la secuencia
    console.log(secuencia);
  }
  
  main();