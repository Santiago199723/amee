let img = document.getElementById('bg-img')

let loo = 0;

document.addEventListener("DOMContentLoaded", function () {
  let audio = document.getElementById("background-music");
  audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador:", error));

  // Quando a música terminar, não repete
  audio.addEventListener("ended", function () {
      console.log("Música finalizada!");
  });
});

const video = document.getElementById("meuVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");
const audio = document.getElementById("background-music"); // Pegando o elemento de áudio

playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
      video.play();
      audio.play(); // 🔊 Agora o áudio também toca!
      playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Ícone de pausa
  } else {
      video.pause();
      audio.pause(); // 🔇 O áudio também pausa se o vídeo parar
      playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Ícone de play
  }
});

muteBtn.addEventListener("click", () => {
  if (video.muted) {
      video.muted = false;
      audio.muted = false; // 🔊 Desmuta o áudio junto com o vídeo
      muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Ícone de volume ligado
  } else {
      video.muted = true;
      audio.muted = true; // 🔇 Muta o áudio junto com o vídeo
      muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; // Ícone de volume desligado
  }
});


setInterval(() => {

  loo++

  if (loo == 1) {

    img.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('1.jpg')";

  }
  if (loo == 2) {

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(bg.jpg)`

  }

  if (loo == 3) {

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(imagem3.jpeg)`

  }
  if( loo == 4 ){

     img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(five.jpg)`
  }
  if (loo > 3) {

    loo = 0 ;
  }

  console.log(loo);

}, 5000);


