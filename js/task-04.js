const counterValue = document.querySelector("#value");
const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
let value = 0;

addBtn.addEventListener("click", onClick);
function onClick() {
  value += 1;
  counterValue.textContent = value;
}
removeBtn.addEventListener("click", onClickRemove);
function onClickRemove() {
  value -= 1;
  counterValue.textContent = value;
}
console.log(counterValue);
console.log(addBtn);
console.log(removeBtn);
