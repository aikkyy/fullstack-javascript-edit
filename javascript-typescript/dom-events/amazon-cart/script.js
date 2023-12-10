// 1. fetch random item data from API
async function fetchDataAsync() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  return data;
}

// 2. update item details and calculate total price
let totalPrice = 0;

fetchDataAsync().then((products) => {
  const itemImages = document.getElementsByClassName("item-image");
  const itemNames = document.getElementsByClassName("item-name");
  const itemDescriptions = document.getElementsByClassName("item-description");
  const itemPrices = document.getElementsByClassName("item-price");

  for (let i = 0; i < itemPrices.length; i++) {
    if (products[i]) {
      const product = products[i];

      //update item details
      itemNames[i].textContent = product.title;
      itemDescriptions[i].textContent = product.description;
      itemPrices[i].textContent = `Price: $${product.price}`;
      itemImages[i].src = product.image;

      //calculate total price
      totalPrice += product.price;
    }
  }

  //update total price
  let totalPriceElem = document.getElementById("total");
  totalPriceElem.innerHTML = `Total Price: $${totalPrice}`;
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
    emptyMessage.textContent = "Your cart is empty ☹︎ Keep shopping.";
  }
}

// 4. remove item from cart when clicking remove button
const removeBtns = document.getElementsByClassName("remove-btn");

for (const button of removeBtns) {
  button.addEventListener("click", function (event) {
    const itemElem = button.parentElement.parentElement;
    if (itemElem) {
      itemElem.remove();
      checkIfCartIsEmpty();
    }
  });
}
