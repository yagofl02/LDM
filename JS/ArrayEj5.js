function sumarArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error('Los arrays deben tener la misma longitud');
    }
    return arr1.map((elemento, indice) => elemento + arr2[indice]);
  }

  