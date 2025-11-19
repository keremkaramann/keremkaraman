const seesaw_plank = document.querySelector(".seesaw-plank");
const seesaw_cont = document.querySelector(".seesaw-container-2");
const weight = Math.floor(Math.random() * 10) + 1;
console.log(seesaw_plank);
console.log(weight);

seesaw_cont.addEventListener("click", (e) => {
  console.log("Çalışıyor");
});
