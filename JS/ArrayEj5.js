function sumarArrays(arr1, arr2) { // Funcion que recibe dos arrays como parametros 
    if (arr1.length !== arr2.length) { //si los arrays no tienen lam isma longitud devuelve un error
      throw new Error('Los arrays deben tener la misma longitud');
    }
    return arr1.map((elemento, indice) => elemento + arr2[indice]); //devuelve un array con la suma de los elementos de los dos arrays
  }

  