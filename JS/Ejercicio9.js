/*Crea un script que solicite por teclado dos números enteros y muestre en la consola todos 
los números primos que hay entre ellos y cuántos son.*/

function esPrimo(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let num1 = parseInt(prompt('Ingrese el primer número entero: '));
  let num2 = parseInt(prompt('Ingrese el segundo número entero: '));
  
  if (isNaN(num1) || isNaN(num2)) {
    alert('Error: Los números ingresados no son enteros.');
  } else if (num1 > num2) {
    alert('Error: El primer número debe ser menor que el segundo.');
  } else {
    const primos = [];
    for (let i = num1; i <= num2; i++) {
      if (esPrimo(i)) {
        primos.push(i);
      }
    }
  
    alert(`Números primos entre ${num1} y ${num2}: ${primos.join(', ')}`);
    alert(`Cantidad de números primos: ${primos.length}`);
  }