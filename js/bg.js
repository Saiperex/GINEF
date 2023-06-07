const bg = document.querySelector(".inicio_logo");
let index = 1;

function prueba() {
  if (index >= 4) {
    index = 1;
  }
  bg.style.backgroundImage = 'url("img/bg' + index + '.png")';
  index++;
}

// Solo hay tres imágenes, así que el intervalo debería ser de 8000 ms (8 segundos)
setInterval(prueba, 5000);
