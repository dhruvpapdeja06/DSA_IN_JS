// Difference between let,var and const

// To store the data we need a container that is known as variable where we store our data. 
// Data like name,mobile number,age, height --> meaningful info provide is known as data.

// const --> constant (not change) --> re-assign not possible

// console.log(temp); ReferenceError: Cannot access 'temp' before initialization
const temp = 10;
// temp = 100; TypeError: Assignment to constant variable.
console.log(temp);


// let --> re-assign possible (In DSA we use let )
// console.log(age); ReferenceError: Cannot access 'age' before initialization
let age = 22;
age = 44;
console.log(age);

// var 
// console.log(a); not error --> undefined
var a = 11;
console.log(a);

// global
// console.log(b); ReferenceError: b is not defined
b = 10;
console.log(b);

// Probem statements 

// sum of two integers;

let num1 = 55;
let num2 = 99;
console.log("Sum of two numbers is :",num1 + num2);

// Relation between int and string

// str + str --> concat
let str1 = "Tushar";
let str2 = "Pahadi";

console.log(str1 + " " + str2);
console.log(typeof(str1 + " " + str2));

// string + int = string 
let first = "Ajay";
let favNum = 77;
console.log(first + " " + favNum);
console.log(typeof(first + " " + favNum));

// int + int --> int
console.log(typeof(num1 + num2)); //arithmetic operation


// suma and message
// Js Engine --> data assign from right side and equation solve from left side , when you get 2 operand one operator to stop it
console.log("the sum of " + num1 + " and " + num2 + " is " + num1 + num2); // here not bodmas then start solve from left and first operand str + int str--> like till num1 (str + num2 )==concat
console.log("the sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
console.log(a + b + "is the sum " + a + "and" + b);

// type coercion --> At Run time change the operand type based on the operator
console.log('1' + 1);
console.log(typeof('1' + 1)); //string

console.log("1" - 1); //zero -->JS engine capable by arithmetic opertaor know which to perform(here str part convert into num)


// Taking input from the terminal --> first install the lib (npm install prompt-sync)
let prompt = require('prompt-sync')()

// let phone = Number(prompt("Enter you phone no ")); It always accept string type data , want to change parse or typecast

// console.log(typeof(phone));

// console.log(`Phone No is ${phone}`);

// swap two variable with 3 methods

// swap with extra variable
let cont1 = 10;
let cont2 = 20;

let cont3;

console.log(`Value of cont1 ${cont1} and cont2 ${cont2}`)
cont3 = cont2;
cont2 = cont1;
cont1 = cont3;
console.log(cont1,cont2);

// second way
let a1 = 50;
let b1 = 80;

// output --> a1 = 80, b1 = 50
// a -> a + b - 130 
// b -> a - b - 50
// a - > a - b -> 80
console.log(a1,b1);
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log(a1,b1);

// swapping with desturcturing array 
[a1,b1] = [b1,a1];
console.log(a1,b1);