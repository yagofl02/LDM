/*Crea las siguientes funciones: 
• Función que acepte dos arrays y retorne su unión. 
• Función que acepte dos arrays y retorne su intersección. 
• Función que acepte dos arrays y retorne su diferencia. */


function union(a, b) {
    return [...new Set([...a, ...b])];//devuelve un array con los elementos de a y b sin repetir
  }
  
  function interseccion(a, b) {
    return a.filter(x => b.includes(x)); //devuelve un array con los elementos que estan en a y b
  }
  
  function diferencia(a, b) {
    return a.filter(x => !b.includes(x)); //devuelve un array con los elementos que estan en a pero no en b
  }
  
  const conjuntoA = [1, 2, 3, 4]; //conjuntos de ejemplo
  const conjuntoB = [3, 4, 5, 6];
  
  console.log("Conjunto A:", conjuntoA); //se muestran por pantalla los conjuntos
  console.log("Conjunto B:", conjuntoB);
  
  console.log("Unión de A y B:", union(conjuntoA, conjuntoB));// se muestran por pantalla las operaciones
  console.log("Intersección de A y B:", interseccion(conjuntoA, conjuntoB));
  console.log("Diferencia de A y B:", diferencia(conjuntoA, conjuntoB));