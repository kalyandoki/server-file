//1.Js Ans

// Using let
let a = 5;
let b = 3;
let sum = a + b;
console.log("Sum (using let):", sum); // Output: 8
// Using var
var x = 10;
var y = 4;
var difference = x - y;
console.log("Difference (using var):", difference); // Output: 6
// Using const
const p = 7;
const q = 2;
const product = p * q;
console.log("Product (using const):", product); // Output: 14
// Division using all three
let division = a / b;
console.log("Division (using let):", division); // Output: 1.666...
// We can't reassign a value to a `const` variable, so:
const divisionConst = p / q;
console.log("Division with const:", divisionConst); // Output: 3.5

// 2. Js Ans
// Example array

const numbers = [1, 2, 3, 4, 5];
// Map: Applies a function to each item in an array and returns a new array
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
const mapped = customMap(numbers, (num) => num * 2);
console.log("Mapped:", mapped);
// Output: [2, 4, 6, 8, 10]
// Reduce: Reduces the array to a single value by applying a function
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
const res = customReduce(numbers, (acc, num) => acc + num, 0);
console.log("Sum:", res);
// Output: 15
// Filter: Returns a new array with elements that satisfy the condition
function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
const filtered = customFilter(numbers, (num) => num % 2 === 0);
console.log("Filtered (even numbers):", filtered); // Output: [2, 4]
// FlatMap: First maps each element using the callback, then flattens the result
function customFlatMap(arr, callback) {
  return arr.reduce((acc, curr) => acc.concat(callback(curr)), []);
}
const flatMapped = customFlatMap([1, 2, 3], (num) => [num, num * 2]);
console.log("FlatMapped:", flatMapped); // Output: [1, 2, 2, 4, 3, 6]

//3.Ans
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}
greetUser("Alice", sayGoodbye);

//4.Ans

function reverseString(str) {
  // Convert the string into an array of characters, reverse the array, and join it back into a string
  return str.split("").reverse().join("");
}
const reversed = reverseString("hello");
console.log("Reversed String:", reversed); // Output: "olleh"
