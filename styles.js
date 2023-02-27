const answer = document.getElementById("answer");
const done = document.getElementById("done");
const blank = document.getElementById("word");

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

let rand = words[Math.floor(Math.random() * words.length)];
for (let i = 0; i < rand.length; i++) {
  blank.innerHTML += `<div class="dash""><div class="blur"  id="blur-${i}">${rand[i]}</div></div>`;
}

console.log(blank);
done.addEventListener("click", check);
function check() {
  console.log(answer.value);
  for (let i = 0; i < rand.length; i++) {
    if (answer.value == rand[i]) {
      const blurry = document.getElementById("blur-" + i);
      blurry.classList.remove("blur");
    }
  }
}
