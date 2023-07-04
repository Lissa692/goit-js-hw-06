const ListEl = document.querySelectorAll(".item");
console.log("Number of categories:", ListEl.length);

ListEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
