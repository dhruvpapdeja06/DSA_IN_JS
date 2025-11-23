// conditional Statement --> Block of code only execute when condition is valid 

// When we buy medicine above 1000Rs. then get 12% discount

// Check the user is able to vote
let prompt = require("prompt-sync")();


//if only --> If condition false then no output on the screen so user not know application running or not., if-else 

// Marks in Range
// let marks = Number(prompt("Enter your Marks"));

// if(marks > 85 && marks <= 95) console.log("Excellent");
// else if (marks > 80 && marks <= 85) console.log("very good");
// else if (marks > 70 && marks <= 80) console.log("Good");
//else console.log("Fair");

// Practise Questions

//1. Accept two numbers and print the greatest between them
let first = Number(prompt("Enter the first number"));
let second = Number(prompt("Enter the second number"));

if (first > second){
    console.log("First Number is greater than second");
}else{
    console.log("Second Number is greater than first");
}

// 2. Accept an integer and check whether it is an even number or odd.
let num = Number(prompt("Enter the number : "));

if(Math.trunc(num) % 2 === 0 ) console.log("Even");
// else console.log("Odd");

// 3. Accept name and age from the user.Check if user is valid voter or not
let age = Number(prompt("Enter your age : "));

if(age>=18){
    console.log("valid Voter");
}else{
    console.log("InValid Voter");
}

// 4. Accept three number and print the greatest among them
let num1 = Number(prompt("Enter the first num : "));
let num2 = Number(prompt("Enter the second num : "))
let num3 = Number(prompt("Enter the third num : "));

if (num1 > num2 && num1 > num3) console.log("num1 is greater");
else if(num2 > num1 && num2 > num3) console.log("num2 is greater");
else console.log("num3 is greater");

// 5. Accept a year and check if it a lep year or not 
// let year = Number(prompt("Enter the year"));

// A year should be multiple of 400 or divisible by 4 but not divisible by 100

if( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) console.log("Leap Year");
else console.log("Not a Leap Year");

// 6. Shop Discount
//     Amount      |       Discount
//     0-5000      |        0%
//     5001-7000   |        5%
//     7001-9000   |        10%
// more than 9000  |        20%

// Give the payable amount

let offer = [
    {Amount :  "0-5000" ,Discount :  "0%"},  
    {Amount :  "5001-7000", Discount :  "5%"},  
    {Amount :  "7001-9000", Discount :   "10%"},
    {Amount : "more than 9000", Discount : "20%"}];
console.table(offer);
// let amount = Number(prompt("Enter the Amount : "));
let payAmount = null;

if (amount >= 0 && amount <= 5000){
    console.log(`Payable Amount is : ${amount}`);
}else if(amount > 5000 && amount <= 7000){
    payAmount = amount - (amount*.05);
    console.log(`Payable Amount is ${payAmount}`);
}else if (amount > 7000 && amount <=9000){
    payAmount = amount - (amount * .10);
    console.log(`Payable amount is : ${payAmount}`);
}else {
    payAmount = (amount - amount * .20);
    console.log(`Payable amount is : ${payAmount}`);
}

// In the above code repetion of some calculation that is not good for readable and simple other way 
let discount = 0;

if (amount >= 0 && amount <= 5000) discount = 0;
else if (amount > 5000 && amount <= 7000) discount = 5;
else if (amount > 7000 && amount <= 9000) discount = 10;
else  discount = 20;

console.log("Payable amount " + (amount - (discount*amount)/100));


// 6. Electricity Bill
let unitPrice = [
    {Unit : "0-100", Price : "4.2"},
    {Unit : "101-200", Price : "6"},
    {Unit : "201-400", Price : "8"},
    {Unit : "400 above", Price : "13"}
];
console.table(unitPrice);

let unit = Number(prompt("Enter Unit : "));
let amount = 0;

// Brute force (Top down Approach) --> Repeatidly Task Perform
if (unit >= 0 && unit <=100 ) console.log(unit * 4.2);
else if (unit > 100 && unit <= 200 ){
    console.log( (100*4.2) + (unit - 100)*6);
}else if( unit > 200 && unit < 400){
    console.log((100*4.2) + (100*6) + (unit-200)*8);
}else {
    console.log((100*4.2) + (100*6) + (200*8) + (unit-400)*13);
}

// Bottom up Approach

// let amount = 0;
if(unit > 400 ){
    amount = (unit - 400)*13; //total - > 600 
    unit = 400;
}
if(unit > 200 && unit < 400){
    amount = amount + (unit-200)*8;
    unit = 200;
}
if(unit > 100 && unit < 200){
    amount = amount + (unit-100)*6;
    unit = 100;
}
amount = amount + (unit*4.2);
console.log(amount);

let month = Number(prompt("Enter a month :"));
let year = Number(prompt("Enter a year :"));
let days = 0;

if(month === 2){
    if((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)){
        days = 29;
    }else days = 28; 
}else if ( month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) days = 31
    else days = 30;

console.log(days);