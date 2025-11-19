const seesaw_plank = document.querySelector(".seesaw-plank");
const seesaw_cont = document.querySelector(".seesaw-container-2");
const leftValue = document.querySelector("#left_weight");
const rightValue = document.querySelector("#right_weight");
leftValue.textContent = 0;
rightValue.textContent = 0;

const leftWeights = [];
const rightWeights = [];

seesaw_cont.addEventListener("click", (e) => {
  const weight = Math.floor(Math.random() * 10) + 1;
  const size = weight * 5;

  const position = seesaw_cont.getBoundingClientRect();
  const clickX = e.clientX - position.left;
  const middle = position.width / 2;

  if (clickX < middle) {
    leftWeights.push(weight);
  } else {
    rightWeights.push(weight);
  }

  const sumLeft = leftWeights.reduce((a, b) => a + b, 0);
  leftValue.textContent = sumLeft;

  const sumRight = rightWeights.reduce((a, b) => a + b, 0);
  rightValue.textContent = sumRight;

  let diff = sumRight - sumLeft;
  diff = Math.max(-15, Math.min(15, diff));
  seesaw_plank.style.transform = `translateX(-50%) rotate(${diff}deg)`;

  const newWeight = document.createElement("div");
  let red = Math.floor(Math.random() * 250 + 0);
  let green = Math.floor(Math.random() * 250 + 0);
  let blue = Math.floor(Math.random() * 250 + 0);
  let rgb = "rgb(" + red + "," + green + "," + blue + ")";

  newWeight.className = "weight";
  newWeight.style.width = 20 + size + "px";
  newWeight.style.height = 20 + size + "px";
  newWeight.textContent = weight;
  newWeight.style.backgroundColor = rgb;
  newWeight.style.color = "white";
  newWeight.style.transform = "translateY(-280px)";
  newWeight.style.left = `${clickX - size}px`;

  seesaw_plank.appendChild(newWeight);

  setTimeout(() => {
    newWeight.style.transform = "translateY(0)";
  }, 50);
});

function resetFunc() {
  leftWeights.length = 0;
  rightWeights.length = 0;
  leftValue.textContent = 0;
  rightValue.textContent = 0;
  seesaw_plank.style.transform = "translateX(-50%)";
  document.querySelectorAll(".weight").forEach((w) => w.remove());
}
