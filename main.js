let currPlayerIdx = 0;

let diceImages = [
  "./assets/dice-images/dice-six-faces-1.png",
  "./assets/dice-images/dice-six-faces-2.png",
  "./assets/dice-images/dice-six-faces-3.png",
  "./assets/dice-images/dice-six-faces-4.png",
  "./assets/dice-images/dice-six-faces-5.png",
  "./assets/dice-images/dice-six-faces-6.png",
];

let players = [new Map(), new Map()];

/* Store reference for the curr Score and Tot Score for player 1 (index 0) */
players[0].set("currScore-ele", document.getElementById("player1-curr-score"));
players[0].set("totalScore-ele", document.getElementById("player1-tot-score"));

/* Store reference for the curr Score and Tot Score for player 2 (index 1) */
players[1].set("currScore-ele", document.getElementById("player2-curr-score"));
players[1].set("totalScore-ele", document.getElementById("player2-tot-score"));

/* Set the currScore and totScore to 0 for both players */
players.forEach((player) => {
  player.set("currScore", 0);
  player.set("totScore", 0);
});

/* Get the buttons */
let newGameBtn = document.getElementById("new-game-btn");
let rollBtn = document.getElementById("roll-dice-btn");
let holdBtn = document.getElementById("hold-btn");

/* Get the dice image */
let diceImg = document.getElementById("dice-img");

let playersBoxes = [
  document.getElementsByClassName("player1")[0],
  document.getElementsByClassName("player2")[0],
];

/* ================= Hadling Buttons ================= */

function setActivePlayer() {
  playersBoxes.forEach((playerBox, idx) => {
    if (idx === currPlayerIdx) {
      playerBox.classList.add("active");
    } else {
      playerBox.classList.remove("active");
    }
  });
}

function toggleActivePlayer() {
  currPlayerIdx = 1 - currPlayerIdx;
  setActivePlayer();
}

/* Add event listener for new game button */
newGameBtn.addEventListener("click", function () {
  players.forEach((player) => {
    player.set("currScore", 0);
    player.set("totScore", 0);
    player.get("currScore-ele").innerText = 0;
    player.get("totalScore-ele").innerText = 0;
  });

  currPlayerIdx = 0;
  setActivePlayer();
  diceImg.src = "./assets/dice-images/dice-six-faces-1.png";
});

function getRandomeNumber(from = 1, to = 6) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function displayPopUp() {
  
}

/* Add event listener for roll button */
rollBtn.addEventListener("click", function () {
  let diceValue = getRandomeNumber();
  diceImg.src = diceImages[diceValue - 1];

  console.log(
    players[currPlayerIdx].get("totScore") +
      players[currPlayerIdx].get("currScore") + diceValue
  );

  if (diceValue === 1) {
    players[currPlayerIdx].set("currScore", 0);
    players[currPlayerIdx].get("currScore-ele").innerText = 0;
    players[currPlayerIdx].set("totScore", 0);
    players[currPlayerIdx].get("totalScore-ele").innerText = 0;
    toggleActivePlayer();
  } else {
    players[currPlayerIdx].set(
      "currScore",
      players[currPlayerIdx].get("currScore") + diceValue
    );
    players[currPlayerIdx].get("currScore-ele").innerText =
      players[currPlayerIdx].get("currScore");

    if (
      players[currPlayerIdx].get("totScore") +
        players[currPlayerIdx].get("currScore") >=
      30
    ) {
      addCurrScoreToTotScore();
      displayPopUp();
      newGameBtn.click();
    }
  }
});

function addCurrScoreToTotScore() {
  players[currPlayerIdx].set(
    "totScore",
    players[currPlayerIdx].get("totScore") +
      players[currPlayerIdx].get("currScore")
  );
  players[currPlayerIdx].get("totalScore-ele").innerText =
    players[currPlayerIdx].get("totScore");

  players[currPlayerIdx].set("currScore", 0);
  players[currPlayerIdx].get("currScore-ele").innerText = 0;
}

/* Add event listener for hold button */
holdBtn.addEventListener("click", function () {
  addCurrScoreToTotScore();
  toggleActivePlayer();
});
