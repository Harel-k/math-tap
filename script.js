const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const targetText = document.getElementById("targetText");
const buttonGrid = document.getElementById("buttonGrid");
const resultMessage = document.getElementById("resultMessage");

const colors = [
  { name: "Red", code: "#ff4d4d", emoji: "🔴" },
  { name: "Blue", code: "#4d79ff", emoji: "🔵" },
  { name: "Green", code: "#4dff88", emoji: "🟢" },
  { name: "Yellow", code: "#ffff66", emoji: "🟡" },
  { name: "Purple", code: "#d291ff", emoji: "🟣" }
];

let targetColor = null;

function startGame() {
  homeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resultMessage.classList.add("hidden");
  restartBtn.classList.add("hidden");

  // choose target
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  targetText.textContent = `Tap: ${targetColor.emoji}`;

  // shuffle colors and draw buttons
  buttonGrid.innerHTML = "";
  const shuffled = colors.sort(() => 0.5 - Math.random());
  shuffled.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "colorBtn";
    btn.style.backgroundColor = color.code;
    btn.onclick = () => handleClick(color);
    buttonGrid.appendChild(btn);
  });
}

function handleClick(clickedColor) {
  if (clickedColor.name === targetColor.name) {
    resultMessage.textContent = "✅ Correct! You win!";
  } else {
    resultMessage.textContent = "❌ Wrong! Game Over!";
  }
  resultMessage.classList.remove("hidden");
  restartBtn.classList.remove("hidden");

  // disable all buttons
  const allButtons = document.querySelectorAll(".colorBtn");
  allButtons.forEach(btn => btn.disabled = true);
}

startBtn.onclick = startGame;
restartBtn.onclick = startGame;
