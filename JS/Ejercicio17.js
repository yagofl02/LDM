/*Crea un script que lea secuencias de caracteres con el formato siguiente: 
LetraNúmeroCarácter 
Por ejemplo, las siguientes son cadenas de este tipo: M135t, b57X, n1335$ o L91. 
La entrada puede constar de varias líneas y cada una puede contener cero o más 
secuencias separadas por espacios en blanco. 
Cada secuencia se procesará para generar un valor numérico de la forma siguiente: 
 
• Si la primera letra es mayúscula, el número que hay entre ella y el último 
carácter se multiplicará por el valor numérico de dicho carácter. En caso contrario, 
en lugar de la multiplicación se realizará una división. 
• Si el último carácter es alfabético, se calculará la raíz cuadrada del resultado 
anterior. Si es un dígito, se calculará su logaritmo neperiano. En caso contrario se 
calculará el resultado de elevar el número de Euler a dicho resultado. 
El programa finalizará, mostrando la suma de todos los valores numéricos obtenidos 
de cada secuencia, cuando se detecte en la entrada un EOF. 
Se asume que no se cometen errores en la entrada de datos y todas las secuencias 
son válidas. */
// Función que procesa la entrada de texto y devuelve la suma total de los valores numéricos obtenidos
function procesarEntrada(entrada) {
  // Separa la entrada en secuencias individuales
  const secuencias = entrada.split(' ');
  // Inicializa la suma total a 0
  let sumaTotal = 0;

  // Recorre cada secuencia
  secuencias.forEach((secuencia) => {
    // Obtiene la primera letra de la secuencia
    const primeraLetra = secuencia[0];
    // Obtiene el número que hay entre la primera letra y el último carácter
    const numero = secuencia.slice(1, -1);
    // Obtiene el último carácter de la secuencia
    const ultimoCaracter = secuencia[secuencia.length - 1];

    // Inicializa el resultado a 0
    let resultado;

    // Si la primera letra es mayúscula, multiplica el número por el valor numérico del último carácter
    if (primeraLetra === primeraLetra.toUpperCase()) {
      resultado = parseInt(numero) * getValorNumerico(ultimoCaracter);
    } 
    // Si la primera letra es minúscula, divide el número por el valor numérico del último carácter
    else {
      resultado = parseInt(numero) / getValorNumerico(ultimoCaracter);
    }

    // Aplica una operación adicional dependiendo del tipo del último carácter
    if (esAlfabético(ultimoCaracter)) {
      // Si es alfabético, calcula la raíz cuadrada del resultado
      resultado = Math.sqrt(resultado);
    } else if (esDigito(ultimoCaracter)) {
      // Si es un dígito, calcula el logaritmo neperiano del resultado
      resultado = Math.log(resultado);
    } else {
      // Si es otro tipo de caracter, calcula el resultado de elevar el número de Euler a dicho resultado
      resultado = Math.exp(resultado);
    }

    // Suma el resultado a la suma total
    sumaTotal += resultado;
  });

  // Devuelve la suma total
  return sumaTotal;
}

// Función que devuelve el valor numérico de un caracter
function getValorNumerico(caracter) {
  // Si es alfabético, devuelve el código ASCII del caracter
  if (esAlfabético(caracter)) {
    return caracter.charCodeAt(0);
  } 
  // Si es un dígito devuelve el valor numérico del caracter
  else if (esDigito(caracter)) {
    return parseInt(caracter);
  } 
  // Si es otro tipo de carácter,devuelve el código ASCII del carácter
  else {
    return caracter.charCodeAt(0);
  }
}

// Función que devuelve true si un carácter es alfabético
function esAlfabético(caracter) {
  //expresión regular para comprobar si el carácter es alfabético
  return caracter.match(/[a-zA-Z]/);
}

// Función que devuelve true si un carácter es un dígito
function esDigito(caracter) {
  // expresión regular para comprobar si el carácter es un dígito
  return caracter.match(/[0-9]/);
}

// Ejemplo 
const entrada = "M135t b57X n1335$ L91";
const sumaTotal = procesarEntrada(entrada);
console.log('La suma total es:', sumaTotal);