function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", handleColorSubmit);
function handleColorSubmit() {
  document.body.style.backgroundColor = colorEl.textContent =
    getRandomHexColor();
}
console.log(colorEl);
