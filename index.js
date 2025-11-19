const seesaw_plank = document.querySelector(".seesaw-plank");
const seesaw_cont = document.querySelector(".seesaw-container-2");

seesaw_cont.addEventListener("click", (e) => {
  const weight = Math.floor(Math.random() * 10) + 1;
  const size = weight * 5;

  const position = seesaw_cont.getBoundingClientRect();
  const clickX = e.clientX - position.left;

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

  seesaw_cont.appendChild(newWeight);

  setTimeout(() => {
    newWeight.style.transform = "translateY(0)";
  }, 50);
});
