const G = 6.67384e-11;

function calcularFuerzaGravitatoria() {
  const m1 = parseFloat(prompt("masa 1 en kg:"));//poner cantidad de masa
  const m2 = parseFloat(prompt("masa 2 en kg:"));//poner cantidad de masa
  const d = parseFloat(prompt("distancia entre las masas en m:"));//distancia entre las masas
  const F = G * (m1 * m2) / (d ** 2); //formula para calcular la fuerza gravitatoria
  alert(`La fuerza gravitatoria es de ${F} N`);
}
calcularFuerzaGravitatoria();