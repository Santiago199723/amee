document.addEventListener("DOMContentLoaded", function () {
  let img = document.getElementById('bg-img'); // Agora declarado apenas aqui
  let loo = 0;

  // Reproduzir áudio automaticamente
  let audio = document.getElementById("background-music");
  audio.play().catch(error => console.log("Autoplay bloqueado pelo navegador:", error));

  // Quando a música termina
  audio.addEventListener("ended", function () {
      console.log("Música finalizada!");
  });

  // Controle de vídeo e áudio
  const video = document.getElementById("meuVideo");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const muteBtn = document.getElementById("muteBtn");

  playPauseBtn.addEventListener("click", () => {
      if (video.paused) {
          video.play();
          audio.play();
          playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
      } else {
          video.pause();
          audio.pause();
          playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      }
  });

  if (muteBtn) {
      muteBtn.addEventListener("click", () => {
          video.muted = !video.muted;
          audio.muted = !audio.muted;
          muteBtn.innerHTML = video.muted ? 
              '<i class="fa-solid fa-volume-xmark"></i>' : 
              '<i class="fa-solid fa-volume-high"></i>';
      });
  }

  // Troca automática de imagem de fundo
  setInterval(() => {
    const imagens = ["1.jpg", "bg.jpg", "imagem3.jpeg", "five.jpg"];
    
    loo++;
    if (loo >= imagens.length) {
        loo = 0; // Reinicia corretamente para a primeira imagem
    }

    img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imagens[loo]}')`;

    console.log(`Imagem trocada para: ${imagens[loo]}`);
}, 5000);


  // Função para obter o próximo sábado às 15:30
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

  setInterval(updateCountdown, 1000);
  updateCountdown();

  


  function comprarAgora() {
      window.location.href = "https://wa.link/hna1dm";
  }



  // Animação de aparecimento da seção .main3
  const section = document.querySelector(".main3");

  if (section) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  section.classList.add("show");
              }
          });
      });

      observer.observe(section);
  }
});
