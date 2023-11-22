//exercise 1
const lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let i = 0; i < lettersList.length; i++) {
  console.log(lettersList[i]);
}

//exercise 2
const itemsList = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
];

let x = 0;

while (x < itemsList.length) {
  console.log(itemsList[x]);
  x++;
}

const numbersList = [1, 5, 2, 4, 3];

//exercise 3
let sum = 0;
for (let y = 0; y < numbersList.length; y++) {
  sum += numbersList[y];
}

console.log(sum);

//exercise 4
const sortedNumbersList = numbersList.sort();

const max = sortedNumbersList.pop();
const min = sortedNumbersList[0];

console.log(
  "The minimum value is " + min + " and the maximum value is " + max + "."
);

//exercise 5
console.log(numbersList.reverse());

//exercise 6
const numbersListFiltered = numbersList.filter((number) => number % 2 === 0);

console.log(numbersListFiltered);

//exercise 7
console.log(numbersList.sort());

//exercise 8
const sum2 = numbersList.reduce((acc, item) => acc + item, 0);
console.log(sum2);
