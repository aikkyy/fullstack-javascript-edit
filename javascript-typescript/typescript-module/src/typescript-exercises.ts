//exercise 1
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(4, 7));

//exercise 2
function earlyReturn(a: number): string {
  if (a > 0) {
    return "positive";
  } else if (a < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(earlyReturn(0));

//exercise 3
type CarType = {
  brand: string;
  model: string;
  year: number;
};
const car: CarType = {
  brand: "Mazda",
  model: "MX5",
  year: 1995,
};
console.log(car);

//exercise 4
type DataType = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: {
    title: string;
    key_skill: string;
  };
  address: {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  credit_card: {
    cc_number: string;
  };
  subscription: {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
  };
};
const asyncFunction = async (): Promise<DataType> => {
  let response = await fetch("https://random-data-api.com/api/v2/users?size=2");
  let data = await response.json();
  return data;
};
asyncFunction()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//exercise 5
let isDone: boolean = true;
// isDone = "string";

//exercise 6
interface Person {
  firstName: string;
  lastName: string;
}

function greet({ firstName, lastName }: Person): string {
  return `Hey ${firstName} ${lastName}`;
}

const person = {
  firstName: "Carolina",
  lastName: "Aguiar",
};

console.log(greet(person));

//exercise 7
interface Rectangle {
  width: number;
  height: number;
}

function calculateArea({ width, height }: Rectangle): number {
  return width * height;
}

const rectangle = {
  width: 10,
  height: 20,
};

console.log(calculateArea(rectangle));
