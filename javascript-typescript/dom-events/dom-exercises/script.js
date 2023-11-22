// cached DOM elements
const title = document.getElementById("title");
const changeButton = document.getElementById("change-btn");
const listForm = document.getElementById("list-form");
const inputValue = document.getElementById("input-value");
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

  let value = inputValue.value;
  if (value === "") {
    alert("Please add a task");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = value;

  list.appendChild(listItem);
  inputValue.value = "";
}

// exercise 3 - remove list item
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-item")) {
    event.target.remove();
    alert("The list item will be removed.");
  }
});

// exercise 4 - display input value
inputValue.addEventListener("input", function () {
  printInput.innerText = inputValue.value;
});

// exercise 5 - toggle background color
function toggleBackgroundColor(isOriginalColor) {
  mouseOverElement.style.backgroundColor = isOriginalColor
    ? "darksalmon"
    : "salmon";
}

// event listeners
changeButton.addEventListener("click", changeText);
listForm.addEventListener("submit", addListItem);
mouseOverElement.addEventListener("mouseover", () =>
  toggleBackgroundColor(false)
);
mouseOverElement.addEventListener("mouseleave", () =>
  toggleBackgroundColor(true)
);
