// exercise 1
const greet = (name) => `Hello, ${name}!`;
console.log(greet("John"));

// exercise 2
async function fetchDataAsync() {
  let response = await fetch("https://random-data-api.com/api/v2/users");
  let data = await response.json();
  console.log(data);
}
fetchDataAsync();

function fetchDataPromise() {
  fetch("https://random-data-api.com/api/v2/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
fetchDataPromise();

// exercise 3
let user = {
  name: "John",
  address: {
    street: "123 Main St",
  },
};
console.log(user.address?.street);
