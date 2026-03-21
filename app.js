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

// Quando il video finisce
/*
video.addEventListener("ended", () => {
    video.style.transition = "opacity 0.8s ease";
    video.style.opacity = "0";

    setTimeout(() => {
        video.style.display = "none";
        document.body.style.overflow = "auto";
    }, 800);
});
*/

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
  }, 800);
});
