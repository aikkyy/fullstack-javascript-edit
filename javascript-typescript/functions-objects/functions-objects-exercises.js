// exercise 1
function sum(x, y) {
  return x + y;
}

console.log(sum(2, 7));

// exercise 2
const numberSquare = (a) => a * a;
console.log(numberSquare(4));

//exercise 3
const numberType = (number) => {
  if (number > 0) {
    return "positive";
  }
  if (number < 0) {
    return "negative";
  }
  return "zero";
};

console.log(numberType(0));

//exercise 4
var prompt = require("prompt-sync")();

const nestedSum = (num1, num2) => num1 + num2;

const mainOperation = (num1, num2, nestedSum) => nestedSum;

const num1 = parseFloat(prompt("What's the first number? "));
const num2 = parseFloat(prompt("What's the second number? "));
console.log(nestedSum(num1, num2));

//exercise 5
function performMultiply() {
  function multiply(m, n) {
    return m * n;
  }
  return multiply;
}

const anotherResult = performMultiply();
console.log(anotherResult(2, 4));

function performOperation(m, n, operation) {
  return operation(m, n);
}

function multiply(m, n) {
  return m * n;
}

const result = performOperation(2, 3, multiply);
console.log(result);

//exercise 6
const car = {
  brand: "Mazda",
  model: "x5",
  year: "1995",
  carSpecifications: function () {
    return this.brand + " " + this.model + " " + this.year;
  },
};

console.log(car.carSpecifications());

//exercise 7
console.log(car.brand);
console.log(car["model"]);
console.log(car.year);

//exercise 8
car.color = "green";
console.log(car.color);
console.log(car);

//exercise 9
delete car.color;
console.log(car);

//exercise 10
const cars = [
  { brand: "Mazda", model: "x5", year: "1995" },
  { brand: "Toyota", model: "Avalon", year: "1980" },
  { brand: "Mitsubishi", model: "Mirage", year: "1992" },
];

cars.forEach((car) => {
  const { brand } = car;
  console.log(brand);
  const { model } = car;
  console.log(model);
  const { year } = car;
  console.log(year);
});
