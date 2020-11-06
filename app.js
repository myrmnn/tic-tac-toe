const container = document.querySelector(".container");
const boxes = document.querySelectorAll(".box");
const button = document.querySelector("button");

const turn = document.querySelector("h1");

let player = "Player X";

container.addEventListener("click", (e) => {
  if ((e.target.className = "box")) {
    if (player == "Player X") {
      if (!e.target.textContent) {
        player = "Player O";
        e.target.textContent = "X";
      }
    } else {
      if (!e.target.textContent) {
        player = "Player X";
        e.target.textContent = "O";
        e.target.style.color = "forestgreen";
      }
    }
    turn.textContent = `${player}`;
  }
});

button.addEventListener("click", () => {
  boxes.forEach((el) => (el.textContent = ""));
});
