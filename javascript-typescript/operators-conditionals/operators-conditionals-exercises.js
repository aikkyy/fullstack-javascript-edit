//exercise 1
const x = parseFloat(prompt("What's the value of x? "));
const y = parseFloat(prompt("What's the value of y? "));

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

//exercise 2
const celsius = parseFloat(prompt("What is the temperature in Celsius? "));
let fahrenheit = celsius * 1.8 + 32;

console.log(
  celsius + "º Celsius equals " + fahrenheit.toFixed(2) + "º Fahrenheit."
);

//exercise 3
const name = prompt("What is your name? ");
const weight = parseFloat(prompt("How much do you weight in kg? "));
const height = parseFloat(prompt("What is your height in m? "));

let imc = weight / (height * height);

console.log(
  name +
    " weights " +
    weight +
    " kg and is " +
    height +
    " m tall, which means they have an IMC of " +
    imc.toFixed(2) +
    "."
);

//exercise 4
const a = parseFloat(prompt("What is the size of the side? "));
const b = parseFloat(prompt("What is the size of the other side? "));

let square = a * a;
let rectangle = a * b;
let triangle = (a * b) / 2;

if (square > rectangle && square > triangle) {
  console.log("The square has the biggest area.");
} else if (square < rectangle && rectangle > triangle) {
  console.log("The rectangle has the biggest area.");
} else {
  console.log("The triangle has the biggest area.");
}

//exercise 5
const num = parseFloat(prompt("Write a number: "));

if (num % 2 === 0) {
  console.log("Your number is even.");
} else {
  console.log("Your number is odd.");
}

//exercise 6
const kmh = parseFloat(prompt("Write the speed value in km/h: "));

let mph = kmh / 1.609;

console.log("The speed is " + mph.toFixed(2) + " mph.");

//exercise 7
const minutes = parseFloat(prompt("How many minutes? "));

let hours = minutes / 60;
let hoursMinutes = minutes % 60;

if (hours < 1) {
  console.log(minutes + " minutes equals " + hoursMinutes + " minutes.");
} else if (hoursMinutes != 0) {
  console.log(
    minutes +
      " minutes equals " +
      hours.toFixed(0) +
      " hours and " +
      hoursMinutes +
      " minutes."
  );
} else {
  console.log(minutes + " minutes equals " + hours + " hours.");
}

//exercise 8
const weekDay = prompt("What is the week day? ").toLowerCase();

if (weekDay == "monday") {
  console.log(weekDay + " is the first day of the week.");
} else if (weekDay == "tuesday") {
  console.log(weekDay + " is the second day of the week.");
} else if (weekDay == "wednesday") {
  console.log(weekDay + " is the third day of the week.");
} else if (weekDay == "thursday") {
  console.log(weekDay + " is the fourth day of the week.");
} else if (weekDay == "friday") {
  console.log(weekDay + " is the fifth day of the week.");
} else if (weekDay == "saturday") {
  console.log(weekDay + " is the sixth day of the week.");
} else if (weekDay == "sunday") {
  console.log(weekDay + " is the seventh day of the week.");
} else {
  console.log(weekDay + " is not a week day.");
}

//exercise 9
const number = parseFloat(prompt("Write a number: "));
const op = prompt("Write an operator: ");
const anotherNumber = parseFloat(prompt("Write another number: "));

if (op != "+" && op != "-" && op != "*" && op != "/") {
  console.log("The operator is invalid.");
} else if (op == "+") {
  console.log(number + anotherNumber);
} else if (op == "-") {
  console.log(number - anotherNumber);
} else if (op == "*") {
  console.log(number * anotherNumber);
} else if (op == "*") {
  console.log(number / anotherNumber);
}

// exercise 10
const numberInput = parseFloat(prompt("Give me a number: "));

const newNumber =
  numberInput % 2 === 0 ? "Your number is even." : "Your number is odd";

console.log(newNumber);
