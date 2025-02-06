const G = 6.67384e-11;

function calcularFuerzaGravitatoria() {
  const m1 = parseFloat(prompt("masa 1 en kg:"));
  const m2 = parseFloat(prompt("masa 2 en kg:"));
  const d = parseFloat(prompt("distancia entre las masas en m:"));
  const F = G * (m1 * m2) / (d ** 2);
  alert(`La fuerza gravitatoria es de ${F} N`);
}
calcularFuerzaGravitatoria();