function convertirRgbAYiq() {
  const rojo = parseFloat(prompt("valor del rojo (0-255):"));//Mensaje para poner la cantidad de color que quieres para cada uno
  const verde = parseFloat(prompt("valor del verde (0-255):"));//Mensaje para poner la cantidad de color que quieres para cada uno
  const azul = parseFloat(prompt("valor del azul (0-255):"));//Mensaje para poner la cantidad de color que quieres para cada uno
  const y = 0.299 * rojo + 0.587 * verde + 0.114 * azul;//Constante para que salga correctamente la cantidad de color
  const i = 0.596 * rojo - 0.275 * verde - 0.321 * azul;
  const q = 0.212 * rojo - 0.528 * verde + 0.311 * azul;
  alert(`Las componentes son: Y = ${y}, I = ${i}, Q = ${q}`);//Muestra el resultado
}
convertirRgbAYiq();