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

if (muteBtn) {
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
}




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

function getNextSaturday() {
  let now = new Date();
  let nextSaturday = new Date(now);
  nextSaturday.setDate(now.getDate() + (6 - now.getDay() + 7) % 7);
  nextSaturday.setHours(15, 30, 0, 0);
  return nextSaturday;
}

function updateCountdown() {
  let eventDate = getNextSaturday().getTime();
  let now = new Date().getTime();
  let distance = eventDate - now;

  if (distance <= 0) {
      document.querySelector(".countdown").innerHTML = "¡El evento ya comenzó!";
      return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');

  localStorage.setItem("countdown", JSON.stringify({ days, hours, minutes, seconds }));
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(updateCountdown, 1000);
  updateCountdown();
});




