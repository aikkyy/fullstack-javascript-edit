// exercise 1
const greet = (name) => `Hello, ${name}!`;
console.log(greet("John"));

// exercise 2
async function fetchData() {
  let response = await fetch("https://random-data-api.com/api/v2/users");
  let data = await response.json();
  console.log(data);
}
fetchData();

// exercise 3
let user = {
  name: "John",
  address: {
    street: "123 Main St",
  },
};
console.log(user?.address?.street);
