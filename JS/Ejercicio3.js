function calcularCosteTotal() {
    const alojamiento = parseFloat(prompt("Ingrese el gasto de alojamiento en euros:"));
    const alimentacion = parseFloat(prompt("Ingrese el gasto de alimentación en euros:"));
    const entretenimiento = parseFloat(prompt("Ingrese el gasto de entretenimiento en euros:"));
    const costeTotal = alojamiento + alimentacion + entretenimiento;
    alert('El coste total del viaje es de ${costeTotal} euros.');
   
  }
   calcularCosteTotal();