const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

let intervalId = null;
let startTime = 0;
let elapsedTime = 0;
let ventanaCronometro = null;

function updateDisplay() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  if (ventanaCronometro) {
    ventanaCronometro.document.getElementById('display').textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 3)}`;
  }
}

function start() {
  startTime = new Date().getTime();
  intervalId = setInterval(updateDisplay, 1);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stop() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function reset() {
  elapsedTime = 0;
  if (ventanaCronometro) {
    ventanaCronometro.document.getElementById('display').textContent = '00:00:00.000';
  }
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

function padZero(value, length = 2) {
  return String(value).padStart(length, '0');
}

function abrirVentanaCronometro() {
  ventanaCronometro = window.open('', 'Cronómetro', 'width=200,height=100');
  ventanaCronometro.document.write(`
    <html>
      <head>
        <title>Cronómetro</title>
      </head>
      <body>
        <h1 id="display">00:00:00.000</h1>
      </body>
    </html>
  `);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

abrirVentanaCronometro();