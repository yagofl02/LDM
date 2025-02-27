/*Crea las siguientes funciones: 
• Función que acepte dos arrays y retorne su unión. 
• Función que acepte dos arrays y retorne su intersección. 
• Función que acepte dos arrays y retorne su diferencia. */

const union = (arr1, arr2) => {
    if (arr1 === undefined || arr2 === undefined) return undefined;
    return [...new Set([...arr1, ...arr2])];
}
