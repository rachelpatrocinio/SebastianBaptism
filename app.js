const intro = document.getElementById("intro");
const video = document.getElementById("myVideo");
const music = document.getElementById("bgMusic");
const introVideo = document.getElementById("introVideo");

// Click sull'immagine
intro.addEventListener("click", () => {
  //intro.style.transition = "opacity 0.7s ease";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";

    video.style.display = "block";
    video.play();
    music.play(); // 🎵 parte la musica
  }, 0);
});

video.addEventListener("ended", () => {
  video.style.transition = "opacity 0.8s ease";
  video.style.opacity = "0";

  setTimeout(() => {
    video.style.display = "none";

    // 👉 mostra e avvia il secondo video
    introVideo.style.display = "block";
    introVideo.style.opacity = "0";
    introVideo.style.display = "block";

    setTimeout(() => {
      introVideo.style.transition = "opacity 0.8s ease";
      introVideo.style.opacity = "1";
    }, 50);
    introVideo.play();

    // 👉 ora si può scrollare
    document.body.style.overflow = "auto";
    document.querySelector("main").style.opacity = "1";
  }, 800);
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const carousel = document.querySelector(".carousel-container");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

carousel.style.opacity = 0;
carousel.style.transform = "translateY(50px)";
carousel.style.transition = "opacity 1s ease, transform 1s ease";

observer.observe(carousel);
