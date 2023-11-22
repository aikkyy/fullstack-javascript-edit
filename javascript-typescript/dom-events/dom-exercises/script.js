// exercise 1 - change text
const title = document.getElementById("title");
const changeButton = document.getElementById("change-btn");

function changeText() {
  title.innerText = "Title Changed!";
  changeButton.innerText = "Clicked";
}

changeButton.addEventListener("click", changeText);

// exercise 2 - add list item
const listForm = document.getElementById("list-form");
const inputValue = document.getElementById("input-value");
const list = document.getElementById("list");

function addListItem(event) {
  event.preventDefault();

  let value = inputValue.value;
  if (value === "") {
    alert("Please add a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.textContent = value;

  list.appendChild(listItem);
  inputValue.value = "";
}

listForm.addEventListener("submit", addListItem);

// exercise 3 - remove list item
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("list-item")) {
    event.target.remove();
    alert("The list item will be removed.");
  }
});

// exercise 4 - display input value
const printInput = document.getElementById("print-input");

inputValue.addEventListener("input", function () {
  printInput.innerText = inputValue.value;
});

// exercise 5 - toggle background color
const mouseOverElement = document.getElementById("mouseover");

function toggleBackgroundColor(isOriginalColor) {
  if (isOriginalColor) {
    mouseOverElement.style.backgroundColor = "darksalmon";
  } else {
    mouseOverElement.style.backgroundColor = "salmon";
  }
}

function onMouseOver() {
  toggleBackgroundColor(false);
}
function onMouseLeave() {
  toggleBackgroundColor(true);
}
mouseOverElement.addEventListener("mouseover", onMouseOver);
mouseOverElement.addEventListener("mouseleave", onMouseLeave);
