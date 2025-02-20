function elementoMasFrecuente(arr) {
    if (!arr || arr.length === 0) return undefined;
  
    let maxFrecuencia = 0;
    let elementoMasFrecuente;
  
    for (let i = 0; i < arr.length; i++) {
      let frecuencia = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) frecuencia++;
      }
      if (frecuencia > maxFrecuencia) {
        maxFrecuencia = frecuencia;
        elementoMasFrecuente = arr[i];
      }
    }
  
    return elementoMasFrecuente;
  }