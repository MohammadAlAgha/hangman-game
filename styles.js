const answer = document.getElementById("answer");
const done = document.getElementById("done");
const blank = document.getElementById("word");
const attempts = document.getElementById("try");
const message = document.getElementById("message");
const start = document.getElementById("start");

const words = [
  "table",
  "apple",
  "ball",
  "banana",
  "key",
  "mouse",
  "dinner",
  "country",
  "toothbrush",
  "chair",
  "hoodie",
  "laptop",
  "temperature",
  "restart",
  "player",
  "game",
  "winner",
  "loser",
  "start",
  "rocket",
  "thunder",
  "soccer",
  "tree",
  "dictionaries",
];

start.addEventListener("click", restart);

function restart() {
  attempts.innerHTML = 10;
  message.innerHTML = "";
  blank.innerHTML = "";
  steps = 0;

  let rand = words[Math.floor(Math.random() * words.length)];
  for (let i = 0; i < rand.length; i++) {
    blank.innerHTML += `<div class="dash""><div class="blur"  id="blur-${i}">${rand[i]}</div></div>`;
  }
  const blur = document.getElementById("blur");
  const rules = {
    found: false,
    steps: rand.length,
    game: true,
  }; //dictionary
  done.addEventListener("click", check);
  function check() {
    if (answer.value.length == 1) {
      if (rules.game) {
        if (attempts.innerHTML != 0) {
          for (let i = 0; i < rand.length; i++) {
            if (answer.value == rand[i]) {
              const blurry = document.getElementById("blur-" + i);
              blurry.classList.remove("blur");
              rules.found = true;
              rules.steps -= 1;
            }
          }
          if (rules.steps == 0) {
            message.innerHTML = "You won!!!";
            start.innerHTML = "Restart";
            rules.game = false;
          }
          if (rules.found == false) {
            if (attempts.innerHTML != 1) {
              attempts.innerHTML -= 1;
            } else {
              message.innerHTML = "You Lost :( ,  try again.";
              rules.game = false;
            }
          }
          rules.found = false;
        }
      }
    } else {
      message.innerHTML = "Please enter one letter";
      start.innerHTML = "Restart";
    }
  }
  blur.innerHTML = null;
}
