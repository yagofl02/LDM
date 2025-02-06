/*Crea un script en el que se defina una función que convierta una temperatura de grados 
Celsius a grados Fahrenheit o viceversa. El tipo de conversión se seleccionará con un 
parámetro y, será por defecto de grados Celsius a grados Fahrenheit. 
Completa el script con un programa que permita realizar varias conversiones según las 
especificaciones siguientes: 
• Antes de realizar cada conversión se presentará un menú con tres opciones: 
“Convertir Celsius a Fahrenheit”, “Convertir Fahrenheit a Celsius” y “Salir”. 
• Si el usuario elige un tipo de conversión, se le pedirá que introduzca por teclado la 
temperatura que desea convertir indicando la unidad elegida. 
• Se mostrará el resultado de cada conversión con una precisión de tres decimales*/


function convertirTemperatura(tipoConversion) {
    let temperatura = parseFloat(prompt("Introduce la temperatura a convertir:"));
    let resultado;
    if (tipoConversion === "Celsius a Fahrenheit") {
        resultado = (temperatura * 9 / 5) + 32;
    } else {
        resultado = (temperatura - 32) * 5 / 9;
    }
    alert(`El resultado de la conversión es ${resultado.toFixed(3)}`);
}
