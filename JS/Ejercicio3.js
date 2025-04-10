function calcularCosteTotal() {
    const alojamiento = parseFloat(prompt(" gasto de alojamiento en euros:")); //mensaje para poner el gasto de alojamiento
    const alimentacion = parseFloat(prompt(" gasto de alimentación en euros:"));//mensaje gasto alimentacion
    const entretenimiento = parseFloat(prompt("gasto de entretenimiento en euros:"));//mensaje gasto en entretenieminto
    const costeTotal = alojamiento + alimentacion + entretenimiento; // suma de los gastos
    alert('El coste total del viaje es de ${costeTotal} euros.'); // muestra por pantalla el resultado
   
  }
   calcularCosteTotal();