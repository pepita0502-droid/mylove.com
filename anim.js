// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "She's on top of the world, it's a good life", time: 19 },
  { text: "I get up just as high on a good night", time: 28 },
  { text: "And it's good, right? Mm", time: 37 },
  { text: "She wants flowers to grow in the sunshine", time: 51 },
  { text: "But I run just like the wind in the moonlight", time: 59 },
  { text: "And it's not right ", time: 109 },
  { text: "'cause in my mind", time: 113 },
  { text: "She's a dream,", time: 118 },
  { text: " the best thing to happen to me", time: 121 },
  { text: "She's a dream,", time: 127 },
  { text: " all that I thought it could be", time: 130 },
  { text: "She's a dream come true", time: 136 },
  { text: "But I have nightmares,", time: 145 },
  { text: "it should've been you", time: 149.5 },
  { text: "You were all that I had for a long time", time: 159.5 },
  { text: "And I still think back to you on a bad night", time: 208.5 },
  { text: "And it's a bad night", time: 216.5 },
  { text: "It's a bad-bad night", time: 221 },
  { text: "She's a dream, ", time: 226.5 },
  { text: "the best thing to happen to me", time: 228.5 },
  { text: "She's a dream,", time: 234 },
  { text: "all that I thought it could be", time: 237.5 },
  { text: "She's a dream come true", time: 243.5 },
  { text: "But I have nightmares,", time: 253.5 },
  { text: "it should've been you, you, you", time: 257 },
 { text: "Should've been you, you, you", time: 302 },
  { text: "Should've been you, you, you", time: 306 },
  { text: "Should've been you, you, you", time: 310 },
{ text: "Should've been you, should've been you", time: 316 },
  { text: "(In my nightmares, in my nightmares) should've been you", time: 323 },
  { text: "(In my nightmares, in my nightmares) should've been you", time: 328 },


];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.3; // Duración del efecto de aparición en segundos
    var opacity = Math.min(3, (time - currentLine.time) / fadeInDuration);

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