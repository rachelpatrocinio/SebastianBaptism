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


/*
const track = document.querySelector('.carousel-track');
let scroll = 0;
const speed = 1; // velocità px per frame

const trackWidth = track.scrollWidth / 2; // metà track duplicata

function animate() {
  scroll += speed;
  if(scroll >= trackWidth){
    scroll = 0; // reset invisibile
  }
  track.style.transform = `translateX(-${scroll}px)`;
  requestAnimationFrame(animate);
}

animate();
*/
const track = document.querySelector('.carousel-track');
let scroll = 0;
const speed = 1; // px/frame

// calcola larghezza della metà track originale dinamicamente
let firstHalfWidth = 0;
function updateWidth() {
  const imgs = track.querySelectorAll('img');
  const halfCount = imgs.length / 2; // metà duplicata
  firstHalfWidth = 0;
  for(let i=0; i<halfCount; i++){
    firstHalfWidth += imgs[i].offsetWidth + 20; // 20 = gap
  }
}
updateWidth();
window.addEventListener('resize', updateWidth);

function animate() {
  scroll += speed;
  if(scroll >= firstHalfWidth){
    scroll = 0; // reset invisibile grazie al duplicato
  }
  track.style.transform = `translateX(-${scroll}px)`;
  requestAnimationFrame(animate);
}

animate();