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
  checkUI();
});

const i = document.querySelectorAll("i");
// const listItems = document.querySelectorAll("li");
const removeButton = document.querySelectorAll("li button");
const clearAllBtn = document.querySelector("#clear");

// remove selected item
// i.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement)));
// removeButton.forEach((i) => i.addEventListener("click", (e) => console.log(e.target.parentElement.parentElement.remove)));
removeButton.forEach((i) =>
  i.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("remove-item")) {
      if (confirm("Are you sure?")) {
        e.target.parentElement.parentElement.remove();
      }
    }
  })
);

// remove all items
clearAllBtn.addEventListener("click", () => {
  //   listItems.forEach((i) => i.remove());
  if (confirm("Are you sure?")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
  }
  checkUI();
});

// filter search
filter.addEventListener("input", (e) => {
  const listItems = document.querySelectorAll("li");
  //   console.log(e.target.value);

  listItems.forEach((i) => {
    i.style.display = i.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? "" : "none";
    // why does it not work when i add or remove class name????
    // I don't know why adding and removing classes does not hide the items on the list, but changing the style.display to none works when the class does the same thing
    // i.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? i.classList.remove("hidden") : i.classList.add("hidden");
  });
});

// check ui
function checkUI() {
  const listItems = document.querySelectorAll("li");
  if (listItems.length === 0) {
    filter.classList.add("hidden");
    clearAllBtn.classList.add("hidden");
  } else {
    filter.classList.remove("hidden");
    clearAllBtn.classList.remove("hidden");
  }
}

checkUI();
