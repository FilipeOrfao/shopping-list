/////////////////////////adding item/////////////////////////
const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const addItemBtn = document.querySelector("form button");
const itemList = document.querySelector("#item-list");
const filter = document.querySelector("#filter");

addItemBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (itemInput.value === "") return;

  const newLi = document.createElement("li");
  newLi.textContent = itemInput.value;

  const newButton = document.createElement("button");
  newButton.classList = "remove-item btn-link text-red";

  const newIcon = document.createElement("i");
  newIcon.classList = "fa-solid fa-xmark";

  newButton.appendChild(newIcon);
  newLi.appendChild(newButton);
  itemList.appendChild(newLi);

  itemInput.value = "";

  filter.classList.remove("hidden");
});

const i = document.querySelectorAll("i");
const li = document.querySelectorAll("li");
const removeButton = document.querySelectorAll("li button");
const clearAllBtn = document.querySelector("#clear");

// remove selected item
// i.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement)));
// removeButton.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement.parentElement.remove)));
removeButton.forEach((i) =>
  i.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("remove-item")) {
      e.target.parentElement.parentElement.remove();
    }
  })
);

// remove all items
clearAllBtn.addEventListener("click", () => {
  li.forEach((i) => i.remove());
  filter.classList.add("hidden");
});
