const inputEl = document.querySelector("#validation-input");
// const lengthEl = document.querySelector("data-length");
const inputLength = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", setBorder);
function setBorder() {
  if (inputEl.value.length === inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}

console.log(inputEl);
console.log(inputLength);
