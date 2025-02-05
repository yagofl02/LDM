function concatenar (separador, ...cadenas){
    let resultado = "", n = cadenas.length;
    for (let i = 0; i < n ; i++)
        resultado += cadenas[i] + (i == n - 1 ? "" : separador)
    return resultado;

}