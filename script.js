const audio = document.getElementById("background-music");
const video = document.getElementById("meuVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");

document.addEventListener("DOMContentLoaded", function () {
  let img = document.getElementById("bg-img");
  let loo = 0;

  audio.play().catch((error) => console.log("Autoplay bloqueado pelo navegador:", error));

  audio.addEventListener("ended", function () {
    console.log("Música finalizada!");
  });

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      audio.muted = !audio.muted;
      muteBtn.innerHTML = video.muted
        ? '<i class="fa-solid fa-volume-xmark"></i>'
        : '<i class="fa-solid fa-volume-high"></i>';
    });
  }

  video.addEventListener("play", () => {
    if (audio.paused) {
      audio.play();
    }
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  });

  video.addEventListener("pause", () => {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  });

  const imagens = ["1.jpg", "bg.jpg", "imagem3.jpeg", "five.jpg"];
  const preloadedImages = [];

  imagens.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
  });

  // Troca automática de imagem de fundo
  setInterval(() => {
    loo++; // Avança para a próxima imagem
    if (loo >= imagens.length) {
      loo = 0; // Reinicia o índice
    }

    const novaImagem = new Image();
    novaImagem.src = imagens[loo];

    novaImagem.onload = () => {
      img.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imagens[loo]}')`;
      console.log(`Imagem trocada para: ${imagens[loo]}`);
    };
  }, 5000);

  // Função para obter o próximo sábado às 15:30
  function getNextSaturday() {
    let now = new Date();
    let nextSaturday = new Date(now);
    nextSaturday.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
    nextSaturday.setHours(15, 30, 0, 0);
    return nextSaturday;
  }

  // Função para definir o limite de exibição da mensagem (sábado às 17:30)
  function getSaturdayEnd() {
    let now = new Date();
    let saturdayEnd = new Date(now);
    saturdayEnd.setDate(now.getDate() + ((6 - now.getDay() + 7) % 7));
    saturdayEnd.setHours(17, 30, 0, 0);
    return saturdayEnd;
  }

  function updateCountdown() {
    let now = new Date().getTime();
    let eventDate = getNextSaturday().getTime(); // Próximo sábado às 15:30
    let eventEnd = getSaturdayEnd().getTime(); // Próximo sábado às 17:30
    let distance = eventDate - now;

    // Se já passou de 17:30, define a contagem diretamente para 6 dias, 21h e 30min
    if (now >= eventEnd) {
      // Define o tempo de 6 dias, 21h, 30min, 0s
      let countdownEndTime = new Date().getTime() + (6 * 24 * 60 * 60 * 1000) + (21 * 60 * 60 * 1000) + (30 * 60 * 1000); // 6 dias, 21h, 30m, 0s
      let countdownDistance = countdownEndTime - now;

      // Subtrai a cada segundo
      setInterval(function() {
        countdownDistance -= 1000; // Subtrai 1 segundo

        // Calcula os dias, horas, minutos, segundos restantes
        let days = Math.floor(countdownDistance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((countdownDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((countdownDistance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((countdownDistance % (1000 * 60)) / 1000);

        // Atualiza os elementos HTML
        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(2, "0");
        document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
        document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

        // Se a contagem terminar, exibe a mensagem
        if (countdownDistance <= 0) {
          document.querySelector(".countdown").innerHTML = "O evento já começou! Que Deus lhe use!!";
        }
      }, 1000); // Atualiza a cada segundo
      return; // Não faz mais cálculos após 17:30
    }

    // Se o evento ainda não começou, calcula o tempo restante
    if (now >= eventDate && now < eventEnd) {
      document.querySelector(".countdown").innerHTML = "O evento já começou! Que Deus lhe use!!";
      return;
    }

    // Se o evento ainda não ocorreu (antes das 15:30), calcula o tempo restante
    distance = eventDate - now;

    // Calcula o tempo restante (dias, horas, minutos, segundos)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // Número de dias restantes
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Número de horas restantes
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Número de minutos restantes
    let seconds = Math.floor((distance % (1000 * 60)) / 1000); // Número de segundos restantes

    // Atualiza os elementos no HTML
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

    // Salva no localStorage
    localStorage.setItem("countdown", JSON.stringify({ days, hours, minutes, seconds }));
  }

  // Atualiza a contagem a cada segundo
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

function videohandler() {
  if (video.paused) {
    video.play();
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}
