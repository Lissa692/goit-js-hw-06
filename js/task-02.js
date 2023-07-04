const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.style.listStyleType = ingredient;
  listEl.classList.add("item");
  return listEl;
});
const classEl = document.querySelector("#ingredients");
classEl.append(...ingredientsEl);
// document.body.append(...ingredientsEl);
console.log(ingredientsEl);
