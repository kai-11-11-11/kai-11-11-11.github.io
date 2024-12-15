// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me preguntó por qué", time: 0 },
  { text: "Siento que estoy", time: 2 },
  { text: "en la cima de la Luna", time: 6 },
  { text: "Oh, espera", time:  7},
  { text: "es por ti", time:  9},
  { text: "Lleno mi taza", time: 11 },
  { text: "con zumo de manzana", time: 13 },
  { text: "Domingo por la mañana", time: 16 },
  { text: "viendo dibujos animados", time: 18 },
  { text: "Cariño,yo", time: 20 },
  { text: " no quiero ir a casa está noche", time: 22 },
  { text: "a casa está noche", time: 25 },

  { text: "Déjame estar contigo", time: 27 },
  { text: "te amo <3", time: 28 },
  { text: "Feliz aniversario", time: 30 },


  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);