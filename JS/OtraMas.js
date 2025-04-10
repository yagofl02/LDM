function concatenar (separador, ...cadenas){ //
    let resultado = "", n = cadenas.length;//inicializa el resultado y n
    for (let i = 0; i < n ; i++)
        resultado += cadenas[i] + (i == n - 1 ? "" : separador) // si i es igual a n - 1 no pone el separador
    return resultado;

}