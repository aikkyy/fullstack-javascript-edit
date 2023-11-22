const formElem = document.getElementById("form");
formElem.addEventListener("submit", function (event) {
  event.preventDefault(); //avoid form's default refresh

  //get input element
  const inputElem = document.getElementById("input-value");
  const inputValue = inputElem.value;

  //prevent empty submission
  if (inputValue === "") {
    alert("Please add a task.");
    return;
  }

  //clear input value
  inputElem.value = "";

  //get ul element
  const ulElem = document.getElementById("todo-list");

  //create li element
  const liElem = document.createElement("li");

  //create checkbox element (input)
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  //append child (checkbox) to parent (li)
  liElem.appendChild(checkboxElem);

  //add input value to li
  const nodeText = document.createTextNode(inputValue);
  liElem.appendChild(nodeText);

  //line-through list element when check/uncheck function (event listener)
  checkboxElem.addEventListener("click", function () {
    const isChecked = checkboxElem.checked;

    if (isChecked) {
      liElem.style.textDecoration = "line-through";
    } else {
      liElem.style.textDecoration = "none";
    }
  });

  //create button element
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X"; //add text to button

  // append child (button) to parent (li)
  liElem.appendChild(removeBtn);

  //append child (li) to parent (ul)
  ulElem.appendChild(liElem);

  // remove button function (event listener)
  removeBtn.addEventListener("click", function () {
    ulElem.removeChild(liElem);
  });
});
