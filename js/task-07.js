const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});

inputEl.addEventListener("input", function () {
  textEl.style.fontSize = inputEl.value + "px";
});
console.log(inputEl);
console.log(textEl);
