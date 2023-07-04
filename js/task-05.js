const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value;
  if (inputEl === "") {
    outputEl.textContent = "Anonymous";
  }
});

console.log(inputEl.trim);