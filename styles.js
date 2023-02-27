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
console.log(rand);
for (let i = 0; i < rand.length; i++) {
  blank.innerHTML += ` <div class="dash"></div> `;
}

done.addEventListener("click", check);

function check() {}

{
}
