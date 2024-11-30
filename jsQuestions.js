//1.Js Ans
let a = 5;
let b = 3;
let sum = a + b;
console.log("Sum (using let):", sum);

var x = 10;
var y = 4;
var difference = x - y;
console.log("Difference (using var):", difference);

const q = 2;
const product = p * q;
console.log("Product (using const):", product);
console.log("Division (using let):", division);
const divisionConst = p / q;
console.log("Division with const:", divisionConst);

// 2. Js Ans

const numbers = [1, 2, 3, 4, 5];

function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
const mapped = customMap(numbers, (num) => num * 2);
console.log("Mapped:", mapped);

function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const res = customReduce(numbers, (acc, num) => acc + num, 0);
console.log("Sum:", res);

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
console.log("Filtered (even numbers):", filtered);

function customFlatMap(arr, callback) {
  return arr.reduce((acc, curr) => acc.concat(callback(curr)), []);
}

const flatMapped = customFlatMap([1, 2, 3], (num) => [num, num * 2]);
console.log("FlatMapped:", flatMapped);

//3.Ans
function greetUser(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}
greetUser("Alice", sayGoodbye);

//4.Ans

function reverseString(str) {
  return str.split("").reverse().join("");
}
const reversed = reverseString("hello");
console.log("Reversed String:", reversed);
