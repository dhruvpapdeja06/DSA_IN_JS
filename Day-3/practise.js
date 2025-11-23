// create a program to generate an OTP.

// 4-digit otp lies between 1000 to 9999

// let otp = console.log((Math.random()*8999 + 1000).toFixed()); //There are exactly 9000 different 4-digit numbers.
// // 1000 to 9999
// let otp1 = ((Math.random()*9000)+1000).toFixed();
// console.log(otp1);

// Create a program to calculate the circumference of circle
let pi = 3.14;
let d = 20;
let cir = 2*pi*(d/2);
console.log(cir);

// Calculate the area of triangle with Heron's Formula --> when all the sides of triangle given , and work with any triangle.
let a = 12; 
let b = 14;
let c = 21;

let s = (a+b+c)/2;

let heron = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(heron);