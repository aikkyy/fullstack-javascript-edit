//loading spinner
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";

// 1. fetch random item data from API
async function fetchDataAsync() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
}

let totalPrice = 0;

// 2. update total price
function updateTotalPrice() {
  totalPrice = 0;
  const itemPrices = document.getElementsByClassName("item-price");
  for (const price of itemPrices) {
    const priceValue = parseFloat(price.textContent.replace("Price: $", ""));
    totalPrice += priceValue;
  }
  let totalPriceElem = document.getElementById("total");
  totalPriceElem.innerHTML = `Total Price: $${totalPrice}`;
}

// 2. update item details
fetchDataAsync().then((products) => {
  //hide spinner when data is fetched
  spinner.style.display = "none";
  //display HTML elements when data is fetched
  document.querySelector(".main-content").style.display = "block";

  const itemImages = document.getElementsByClassName("item-image");
  const itemNames = document.getElementsByClassName("item-name");
  const itemDescriptions = document.getElementsByClassName("item-description");
  const itemPrices = document.getElementsByClassName("item-price");

  for (let i = 0; i < itemPrices.length; i++) {
    if (products[i]) {
      const product = products[i];
      itemNames[i].textContent = product.title;
      itemDescriptions[i].textContent = product.description;
      itemPrices[i].textContent = `Price: $${product.price}`;
      itemImages[i].src = product.image;
    }
  }

  updateTotalPrice();
});

// 3. check if cart is empty
function checkIfCartIsEmpty() {
  const cartItems = document.getElementsByClassName("cart-item");
  const totalElem = document.getElementById("cart-total");
  if (cartItems.length === 0) {
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) checkoutBtn.remove();
    if (totalElem) totalElem.remove();
    const emptyMessage = document.getElementById("empty-message");
    emptyMessage.innerHTML =
      'Your cart is empty ☹︎ <a href="#">Keep shopping.</a>';
  }
}

// 4.remove item from cart when clicking remove button
const removeBtns = document.getElementsByClassName("remove-btn");

for (const button of removeBtns) {
  button.addEventListener("click", function (event) {
    const itemElem = button.parentElement.parentElement;
    if (itemElem) {
      itemElem.remove();
      updateTotalPrice();
      checkIfCartIsEmpty();
    }
  });
}
