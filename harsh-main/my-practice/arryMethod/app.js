// // # Concatenating two strings(concat)
str1 = "Hello"
str2 = "world"
resul = str1.concat(str2)
// console.log(resul);

// pop //
let array1 = ['harsh','ansh','shivam','sourya'];
array1.pop()
// console.log(array1);

// slice //
let array2 = [1,2,3,4,5];
let slicedNumbers = array2.slice(1,3);
// console.log(slicedNumbers);

// shift //
let array3 = [1,2,3,4,5];
array3.shift()
console.log(array3);


// push //
let array4 = ['harsh','ansh','shivam'];
array4.push('sourya');
// console.log(array4);

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Remove 1 element starting from index 2, and insert 'orange' and 'kiwi'
fruits.splice(2, 1, 'orange', 'kiwi');

// console.log(fruits);
// // Output: ['apple', 'banana', 'orange', 'kiwi', 'date']

// // Remove 2 elements starting from index 1
// const removedItems = fruits.splice(1, 2);

// console.log(fruits);
// // Output: ['apple', 'kiwi', 'date']

// console.log(removedItems);
// Output: ['banana', 'orange']

// fLAT()//
const arr = [1, 2, [3, 4, [5, 6]]];

// console.log(arr.flat()); // Output: [1, 2, 3, 4, [5, 6]]
// console.log(arr.flat(1)); // Output: [1, 2, 3, 4, [5, 6]]
// console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
// console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6]

// spread oprator //

let array5 = [1,2,3,4,5];
let array6 = [6,7,8,9];
let result = [...array5,...array6];
console.log(result)


const fruitss = ["apple", "banana"];
fruits.push("orange");
console.log(fruitss); // ["apple", "banana", "orange"]


const fruitsss = ["apple", "banana", "orange"];
const lastFruit = fruitsss.pop();
console.log(lastFruit); // "orange"
console.log(fruitsss); // ["apple", "banana"]

const fruit = ["apple", "banana", "orange"];
const firstFruit = fruit.shift();
console.log(firstFruit); // "apple"
console.log(fruit); // ["banana", "orange"]



const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(function(num) {
  return num * 4;
});
console.log(doubledNumbers); // [2, 4, 6]
