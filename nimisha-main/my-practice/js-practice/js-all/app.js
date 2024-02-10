// var example

var x = 5;
var y = 6;
var z = x + y;

console.log(z);
console.log(typeof(z));


// let example

// let x = 10;
// let y = 15;
// let z = x + y;

// console.log(z);
// console.log(typeof(z));


// const example

const pen1 = 22;
const pen2 = 8;
let total = pen1 + pen2;

console.log(total);
console.log(typeof(total));


// Numbers:
let number = 16;

console.log(number);
console.log(typeof(number));


// Strings:
let color = "Yellow";

console.log(color);
console.log(typeof(color));


// Booleans
let t = true;
let f = false;

console.log(t);
console.log(typeof(t));


// Object:
const person = {firstName:"nisha", lastName:"Devnath"};

console.log(person);
console.log(typeof(person));


// Array object:
const cars = ["car", "Volvo", "BMW"];

console.log(cars);
console.log(typeof(cars));


// 1. Arithmetic Operators

// Addition(+)
var x = 5;
var y = 6;
var z = x + y;

console.log(z);
console.log(typeof(z));

// Subtraction (-)

var x = 5;
var y = 6;
var z = x - y;

console.log(z);
console.log(typeof(z));


// Multiplication (*)

var z = x * y;
console.log(z);


// Exponentiation (**)

var z = x ** y;
console.log(z);


// Divisionv (/)

var z = x / y;
console.log(z);


// Modulas (%)

var z = x % y;
console.log(z);


// Increment (++)

var z = ++ y;
console.log(z);


// Decrement (--)

var z = -- y;
console.log(z);


// 2. Assignment Operators

var x = y
var x = x + y
var x = x - y



// 3. Comparison Operators

// equal to
// let x = 5;
// let y = 5;
// let z = 4;
// (x == y)       // Returns true
// (x == z)       // Returns false 

     
// // equal value and equal type
// (x === y)       // Returns true
// (x === z)       // Returns false 


// // not equal
// (x != y)       // Returns false
// (x != z)       // Returns true 

	    
// // not equal value or not equal type
// (x !== y)       // Returns false
// (x !== z)       // Returns true 

    
// // greater than
// (x > y)       // Returns false
// (x > z)       // Returns true 


// // less than
// (x < y)       // Returns false
// (x < z)       // Returns false 

 
// // greater than or equal to
// (x >= y)       // Returns false
// (x >= z)       // Returns false 


// // less than or equal to
// (x <= y)       // Returns false
// (x <= z)       // Returns true 

// //  (?)	    
// // ternary operator


// // 4. Logical Operators

// // logical and
// (x < 10 && y > 1) // is true


// // logical or
// (x == 8 || y == 8) // is false


// // logical not
// !(x == y) // is true



// 5. Conditional Operators

// let a = 20;
// let b = 20;

// if(a > b){
//     console.log("a is greater then b");
// }
// else if (a == b){
//     console.log('a is equal to b');
// }
// else{
//     console.log("Statement is incorrect!!!");
// }

let a = 10;
let b = 15;

if(a == b){
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b");
}


if(a === b){
    console.log("a is equal value and equal type of b");
}
else{
    console.log("a is not is equal value and equal type of b");
}


if(a != b){
    console.log("a is not equal to b");
}
else{
    console.log("a is equal to b");
}



if(a !== b){
    console.log("a is not equal value or not equal type of b");
}
else{
    console.log("a is equal value or equal type of b");
}


if(a > b){
    console.log("a is greater than of b");
}
else{
    console.log("a is not greater than of b");
}


if(a < b){
    console.log("a is less than of b");
}
else{
    console.log("a is not less than of b");
}



if(a >= b){
    console.log("a is greater than or equal to of b");
}
else{
    console.log("a is not greater than or equal to of b");
}


if(a <= b){
    console.log("a is less than or equal to of b");
}
else{
    console.log("a is not less than or equal to of b");
}



let e = 20;
let g = 40;

if(e == g){
    console.log("e is equal to g");
}
else if(e === g){
    console.log("e is equal value and equal type of g");
}
else if(e != g){
    console.log("e is not equal to g");
}
else if(e !== g){
    console.log("e is not equal value or not equal type of g");
}
else if(e > g){
    console.log("e is greater than of g");
}
else if(e < g){
    console.log("e is less than of g");
}
else if(e >= g){
    console.log("e is greater than or equal to of g");
}
else if(e <= g){
    console.log("e is less than or equal to of g");
}
else{
    console.log("a is not equal to b");
}



let age = 19;

if (age < 18) {
  console.log("anil is 18 years old.");
} 
else if (age >= 18 && age <= 21) {
  console.log("anil is between the ages of 18 and 21.");
} 
else {
  console.log("anil is adult.");
}




let ball = 30;
let bet = 35;
let btn = document.getElementById(btn1);

if(ball == bet){
    console.log("e is equal to g");
}
else if(e === g){
    console.log("e is equal value and equal type of g");
}

let body = document.getElementById('body');

let section = document.createElement('section');
body.appendChild(section);

let div = document.createElement('div');
section.appendChild(div);
div.setAttribute('id','div2');

div.innerHTML = `<p>nisha</p>`



// simple function

function plus(){
    let nisha = 80;
    let devnath = 20;

    console.log(nisha + devnath);
}
plus()

function minus(){
    let nisha = 50;
    let devnath = 20;

    console.log(nisha - devnath);
}
minus()

// function with argument

function coman(x1, x2){
    console.log(x1 + x2);
}

coman(2, 5)
coman(10, 20)

function nisha(y1, y2){
    console.log(y1 * y2)
}
document.getElementById("line").innerHTML = nisha(89, 7);
nisha(20, 15)



// nesting in javascript

let first = "javascript"
let second = "practice"

function task1(){
    console.log("hii this is" + ' ' + first + ' ' + second + ' ' + "page" )

    function firstchild(){
        console.log("this is" + ' ' + second + ' ' + "page for"+ ' '+ first)
    }
    firstchild()
}
task1()


let first1 = "Nisha"
let second1 = "Devnath"

function task2(){
    console.log("Hii my name is"+' '+ first1+ ' ' + second1)

    function secondchild(){
        console.log("This is"+ ' '+second+ ' '+ "for Nesting in"+' '+first)
    }
    secondchild()
}
task2()



// Arrow function

task3 =(a, b)=> console.log(a + b);
task3(20, 20);
task3(30, 40);
task3(40, 50);


task4 =(a, b)=> console.log(a * b);
task4(20, 5);
task4(30, 4);
task4(40, 2);



