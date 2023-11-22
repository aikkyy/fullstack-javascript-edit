// cached DOM elements
const title = document.getElementById("title");
const changeButton = document.getElementById("change-btn");
const listForm = document.getElementById("list-form");
const inputField = document.getElementById("input-value");
const list = document.getElementById("list");
const printInput = document.getElementById("print-input");
const mouseOverElement = document.getElementById("mouseover");

// exercise 1 - change text
function changeText() {
  title.innerText = "Title Changed!";
  changeButton.innerText = "Clicked";
}

// exercise 2 - add list item
function addListItem(event) {
  event.preventDefault();

  const inputValue = inputField.value.trim();
  if (!inputValue) {
    alert("Please write something.");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = inputValue;

  list.appendChild(listItem);
  inputField.value = "";
}

// exercise 3 - remove list item
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-item")) {
    event.target.remove();
    alert("The list item will be removed.");
  }
});

// exercise 4 - display input value
function getInputChanges() {
  printInput.innerText = inputField.value;
}

// exercise 5 - toggle background color
function toggleBackgroundColor(isOriginalColor) {
  mouseOverElement.style.backgroundColor = isOriginalColor
    ? "darksalmon"
    : "salmon";
}

// event listeners
changeButton.addEventListener("click", changeText);
listForm.addEventListener("submit", addListItem);
inputField.addEventListener("input", getInputChanges);
mouseOverElement.addEventListener("mouseover", () =>
  toggleBackgroundColor(false)
);
mouseOverElement.addEventListener("mouseleave", () =>
  toggleBackgroundColor(true)
);
