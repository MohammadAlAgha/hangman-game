const answer = document.getElementById("answer");
const done = document.getElementById("done");
const blank = document.getElementById("word");
const attempts = document.getElementById("try");
const message = document.getElementById("message");

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
];

{
  win = false;
  found = false;
}

let rand = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < rand.length; i++) {
  blank.innerHTML += `<div class="dash""><div class="blur"  id="blur-${i}">${rand[i]}</div></div>`;
}

done.addEventListener("click", check);
function check() {
  if (attempts.innerHTML != 0) {
    for (let i = 0; i < rand.length; i++) {
      if (answer.value == rand[i]) {
        const blurry = document.getElementById("blur-" + i);
        blurry.classList.remove("blur");
        found = true;
      }
    }
    if (found == false) {
      if (attempts.innerHTML != 1) {
        attempts.innerHTML -= 1;
      } else {
        message.innerHTML = "You Lost :( ,  try again.";
      }
    }
    found = false;
  }
}
