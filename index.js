//Variables
const seesaw_plank = document.querySelector(".seesaw-plank");
const seesaw_cont = document.querySelector(".seesaw-container-2");
const leftValue = document.querySelector("#left_weight");
const rightValue = document.querySelector("#right_weight");
const tiltAngle = document.querySelector("#tilt_angle");
const infoSection = document.querySelector(".info-section");
leftValue.textContent = 0;
rightValue.textContent = 0;
tiltAngle.textContent = 0;

const leftWeights = [];
const rightWeights = [];

//Whole logic
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
  let side = clickX < middle ? "left" : "right";
  let distance = Math.abs(clickX - middle);

  const sumLeft = leftWeights.reduce((a, b) => a + b, 0);
  leftValue.textContent = sumLeft;

  const sumRight = rightWeights.reduce((a, b) => a + b, 0);
  rightValue.textContent = sumRight;

  let diff = sumRight - sumLeft;
  diff = Math.max(-30, Math.min(30, diff));
  seesaw_plank.style.transform = `translateX(-50%) rotate(${diff}deg)`;
  tiltAngle.textContent = `${diff}.0`;

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

  //info section
  const p = document.createElement("p");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-dumbbell";

  p.appendChild(icon);
  p.append(` ${weight} dropped on ${side} side at ${distance}px from center`);
  infoSection.prepend(p);

  setTimeout(() => {
    newWeight.style.transform = "translateY(0)";
  }, 50);
});

//Reset Logic
function resetFunc() {
  leftWeights.length = 0;
  rightWeights.length = 0;
  leftValue.textContent = 0;
  rightValue.textContent = 0;
  seesaw_plank.style.transform = "translateX(-50%)";
  document.querySelectorAll(".weight").forEach((w) => w.remove());
}
