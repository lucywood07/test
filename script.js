let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");

box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;

  // Box springt an eine zufällige Position
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  box.style.left = x + "px";
  box.style.top = y + "px";
});
