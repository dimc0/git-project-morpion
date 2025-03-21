const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleSound");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    toggleBtn.textContent = "🔇";
  } else {
    music.play();
    toggleBtn.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});