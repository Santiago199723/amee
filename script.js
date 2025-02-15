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

playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>'; // Ícone de pausa
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Ícone de play
    }
});

muteBtn.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; // Ícone de volume ligado
    } else {
        video.muted = true;
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

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(four (1).jpg)`

  }
  if( loo == 4 ){

     img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(five.jpg)`
  }
  if (loo > 3) {

    loo = 0 ;
  }

  console.log(loo);

}, 5000);


