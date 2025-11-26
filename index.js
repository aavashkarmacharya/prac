var x = 3;
let y = 11;
const z = 4;
let name = "chatur";
function compare(a, b) {
  if (a < b) {
    console.log(`${b} is the  largest number `);
  } else {
    console.log(`${a} is the largest number`);
  }
}
compare(5, 5);

function mult(a, b) {
  return a * b;
}
console.log(mult(5, 7));

function call(name, callback) {
  console.log(`hello ${name}`);
  callback();
}

function rancho() {
  console.log("september 5 ");
}
call(name, rancho);

function add() {
  let r;
  r = x + y;
  return r;
}
console.log(add());

let arr = [1, 2, 3, 4];
let i = 0;
arr.push(5);

arr.unshift(0);
arr.unshift(-1);
arr.shift();

console.log(arr.includes(3));

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let user = { gen: "pilot", age: 11 };
console.log(`Whats up bro u a ${user.gen} and your age is ${user.age}`);

function test(arrowcallback) {
  console.log("this is a test function for arrow bs");
  arrowcallback();
}
let typeno = () => console.log("OMG MIRACLEEE!!!");
test(typeno);

const divide = (a, b) => a / b;
console.log(divide(100, 5));

console.log("hello bro");

let fruits = ["Apple", "banana", "pineapple"];
fruits.push("Pumpkin is not a fruittt");
fruits.unshift("Pumpkin is probably a fruit");

const person = [
  {
    id: 1,
    name: "ram",
    isMarried: true,
    cars: ["bmw", "toyota", "mercedes"],
  },
  {
    id: 2,
    name: "rita",
    isMarried: true,
    cars: ["bmw", "toyota", "mercedes"],
  },
  {
    id: 3,
    name: "sita",
    isMarried: true,
    cars: ["bmw", "toyota", "mercedes"],
  },
];

person.forEach((user) => {
  console.log(user.name);
});

const filteredData = person.filter((user) => {
  if (user.id === 3) {
    return user;
  }
});

console.log(filteredData)

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
