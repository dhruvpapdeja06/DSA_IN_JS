// Practise question on loops

// 1. Accept an integer and Print Hi Guys n times
let prompt = require("prompt-sync")();

/*let n = prompt("How many times do you want to print : ");

for(let i = 0; i<n; i++){
    console.log("Hi Guys");
} */

// 2. Print natural number up to n.
// let num = Number(prompt("Enter the number : "));

/*for(let i=1; i<=num; i++){
    console.log(i);
}*/

// 3. Reverse for loop. Print n to 1.
/*for(let i=num; i>0; i--){
    console.log(i);
}*/

// 4. Take a number as input and print its table
/*let table = Number(prompt("Enter the table No"));

for(let i=1; i<=10; i++){
    console.log(` ${table} * ${i} = ${table*i}`);
} */


// 5. Sum up to n terms
/*let num = Number(prompt("Enter number to calculte sum up to n "));
let sum = 0; // state not change
 
for(let i=1; i<=num; i++){
    sum = sum + i;
}
console.log(sum);*/

// 6.Factorial of a number
/*let number = Number(prompt("Enter the Number"));
let fact = 1;

for(let i=1; i<=number; i++){
    fact = fact * i;
}
console.log(fact); */

// 7. Print the sum of all even & odd numbers in a range seperately
/*let first = Number(prompt("Enter the first number ")); //edge case if first no is smaller than second number
let second = Number(prompt("Enter the second number "));
let evenSum = 0, oddSum = 0;

if(first > second){
    let temp;
    temp = first;
    first = second;
    second = temp;
}
for(let i=first; i<=second; i++){
    if(i %2 == 0) evenSum +=i;
    else oddSum +=i;
}


console.log("Evensum is : " + evenSum);
console.log("Oddsum is : " + oddSum); */


// 8. Print all the factors of a number.

// Want to print in the same line --> with the help of nodejs we can print it ......process.stdout.write(i + " ");


// In Factor given ka half ya usse phle hoga 
// 10 --> 1,2,5,10

// n/2 to n-1 no factor why running the loop , iteration is half

/*
let number = Number(prompt("Enter the number "));

for(let i=1; i<=number/2 ; i++){
    if(number % i == 0) process.stdout.write(i + " ");
}
console.log(number);*/


// Part -2 

// Mathematically and logically 1 is not prime 

// For exact 2 mulitples.
// Check if the number is Prime or not.

// 2 is the only even prime no other is odd.
// let number = Number(prompt("Enter the number"));
// let count = 0;


// 9. Check if the number is Prime or not.

/*
if(number < 1 ){
    console.log("Not prime");
}
for(let i=1; i<=number; i++){
    if(number % i == 0) {
        count++;
    }
}
if(count === 2 ) console.log("Prime Number");
else console.log("Not prime");*/


// if(number <= 1 ){
//     console.log("Not prime");
// }else {
//     let count = 0;
//     for(let i=2; i<=number/2; i++){
//     if(number % i == 0) {
//         count++;
//     }
// }
//     if(count === 0 ) console.log("Prime Number");
//     else console.log("Not prime");
// }

// Efficient way
// Sqrt of no -- nhi mila to uska baad bhi nhi milega who completly divisble .
// odd no completely divisible by odd no.
/*
if(number <= 1 ) console.log("Not Prime");
else if (number === 2 ) console.log("Prime");
else if (n % 2 ==0 ) console.log("Not Prime");
else{
    let isPrime = true;
    for(let i=3; i<=Math.floor(Math.sqrt(number)); i+=2){
        if(n %i ==0){
            isPrime=false;
            break;
        }
    }
}

console.log(isPrime?"prime":"not prime"); */

// Write a program to take two inputs a,b & find the value of a raised to the power of b.
let input1 = Number(prompt("Enter the Number "));
let input2 = Number(prompt("Enter the power of the number "));

console.log(Math.pow(input1,input2));


// Break and continue
for(let i=0; i<=5; i++){
    if(i==4) break; //continue --current iteration skip
    console.log("hello world");
}




