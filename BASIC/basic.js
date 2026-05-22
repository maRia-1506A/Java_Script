// array
const number = [10, 44, 65, 46, 96];
number[1] = 100;

console.log(number);
console.log("Length: " + number.length);

number.push(200);
console.log("After pushing new number: " + number);

// object
const details = {
  name: "Maria",
  age: 24,
  hobby: "music",
};

const hb = "hobby";

console.log(details.name); // direct by property
console.log(details["age"]); // access vaia property name string
console.log(details[hb]); //access via property name in a variable
