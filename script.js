/////////////////////////adding item/////////////////////////
const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const addItemBtn = document.querySelector("form button");
const itemList = document.querySelector("#item-list");
const filter = document.querySelector("#filter");

addItemBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") return;

  const newLi = document.createElement("li");
  newLi.textContent = input.value;

  const newButton = document.createElement("button");
  newButton.classList = "remove-item btn-link text-red";

  const newIcon = document.createElement("i");
  newIcon.classList = "fa-solid fa-xmark";

  newButton.appendChild(newIcon);
  newLi.appendChild(newButton);
  itemList.appendChild(newLi);

  input.value = "";
});

const i = document.querySelectorAll("i");
const li = document.querySelectorAll("li");
const removeButton = document.querySelectorAll("li button");
const clearAll = document.querySelector("#clear");

// i.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement)));
// removeButton.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement.parentElement.remove)));
removeButton.forEach((i) => i.addEventListener("click", (e) => e.target.parentElement.parentElement.remove()));

clearAll.addEventListener("click", () => li.forEach((i) => i.remove()));
