/*Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.gast
 */


// ⏱️ 1. Variables de estado
let tiempo = 0;
let intervalo = null;

// 🖥️ 2. Elementos del DOM
const reloj = document.getElementById("reloj");
const inicio = document.getElementById("btn-iniciar");
const pausar = document.getElementById("btn-pausar");
const resetear = document.getElementById("btn-resetear");

// 🧠 3. Función para mostrar el tiempo en formato HH:MM:SS
function actualizarPantalla() {
  // calcular horas
  const horas = Math.floor(tiempo / 3600);

  // calcular minutos (resto después de horas)
  const minutos = Math.floor((tiempo % 3600) / 60);

  // calcular segundos (resto final)
  const segundos = tiempo % 60;

  // función para agregar 0 adelante si es menor a 10
  const formato = (numero) => numero.toString().padStart(2, "0");

  // mostrar en pantalla
  reloj.textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
}

// ▶️ 4. Función iniciar
const iniciar = function () {
  // evitar múltiples intervalos
  if (intervalo === null) {
    intervalo = setInterval(() => {
      tiempo++; // aumenta el tiempo
      actualizarPantalla(); // actualiza la vista
    }, 1000); // cada 1 segundo
  }
};

// ⏸️ 5. Función pausar
function pausarReloj() {
  clearInterval(intervalo); // detener intervalo
  intervalo = null; // permitir volver a iniciar
}

// 🔄 6. Función resetear
function resetearReloj() {
  clearInterval(intervalo); // detener intervalo
  intervalo = null;
  tiempo = 0; // volver a 0
  actualizarPantalla(); // actualizar pantalla (IMPORTANTE)
}

// 🖱️ 7. Eventos
inicio.addEventListener("click", iniciar);
pausar.addEventListener("click", pausarReloj);
resetear.addEventListener("click", resetearReloj);

// 🚀 8. Inicializar pantalla en 00:00:00 al cargar
actualizarPantalla();
