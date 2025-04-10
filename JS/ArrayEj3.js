function elementoMasFrecuente(arr) {
    if (!arr || arr.length === 0) return undefined; //si no recibe ningun parametro o el array esta vacio devuelve undefined
  
    let maxFrecuencia = 0;
    let elementoMasFrecuente;
  
    for (let i = 0; i < arr.length; i++) { //recorre el array
      let frecuencia = 0;
      for (let j = 0; j < arr.length; j++) { 
        if (arr[i] === arr[j]) frecuencia++;
      }
      if (frecuencia > maxFrecuencia) { //si la frecuencia es mayor que la maxima frecuencia guarda la frecuencia y el elemento
        maxFrecuencia = frecuencia;
        elementoMasFrecuente = arr[i];
      }
    }
  
    return elementoMasFrecuente;
  }