// if-else check the conditon until get the condition true

// Switch - case --> It's like conditional statement , behind the scene use hashing techinque (value-based selections.)
// It is faster than if,else but consume extra space .

// edge case --> floating work in JS
let n = 10.9;

switch(n){
    case 1.8: console.log("It's work");
    break;

    case 10.9: console.log("Float work's");
    break;
}

const weekday = [
    {Weekday : "Sunday" , Number : "0" },
    {Weekday : "Monday" , Number : "1"},
    {Weekday : "Tuesday" , Number : "2" },
    {Weekday : "Wednesday" , Number : "3" },
    {Weekday : "Thursday" , Number : "4" },
    {Weekday : "Friday" , Number : "5" },
    {Weekday : "Saturday" , Number : "6" }
    
];

console.table(weekday);

let prompt = require("prompt-sync")();
// let day = Number(prompt("Enter the day number "));

// if not break then fall though condition.
/*
switch(day){
    case 0: {
        console.log("Sunday");
        break;
    }
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednesday");
        break;
    }
    
    case 4: {
        console.log("Friday");
        break;
    }
    
    case 6: {
        console.log("Saturday");
        break;
    }
    default: console.log("Invalid")
} */

// cupon example multiple condtion but same output
/*let code = prompt("Apply disocunt code : ");

switch(code){
    case "NEW50":
    case "FIRST50":{
        console.log("50% OFF Applied");
        break;
    }
    default: console.log("Invalid Cupon");
}*/

// Count the vowel and consonent in the string
/*
let str = prompt("Enter a string");
let consonent = 0 ,vowel = 0;


for(let i=0; i<str.length; i++){
    // console.log(str[i]);
    let ch = str.charAt(i);
    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': {
            vowel++;
            break;
        }
        default: consonent++;
            
        }
    }

console.log("consonent " + consonent);
console.log("vowel " + vowel); */


// Write a program to calculate the area of a circle,rectangle, and triangle using a switch statement.

console.log("Enter 1: Area of a circle");
console.log("Enter 2: Area of a rectangle");
console.log("Enter 1: Area of a triangle");

let choice = Number(prompt("Enter your choice"));

switch(choice){
    case 1:{
        let pi = 3.14;
        let r = Number(prompt("Enter the radius of circle"));
        let area = 3.14*r**2;
        console.log(`Area of Circle is : ${area}`);
        break;
    }
    case 2:{
        let l = Number(prompt("Length of a rectangle"));
        let b = Number(prompt("Breadth of a rectangle"));
        let area = l*b;
        console.log("Area of a rectangle is : " + area);
        break;
    }
    case 3:{
        let h = Number(prompt("Enter height"));
        let b = Number(prompt("Enter base"));
        console.log(`Area of triangle ${(h*b)/2}`);
        break;
    }
}

// VALUES THAT GIVE FALSE (falsy)

// These are only 7 values in JavaScript that become false in an if() condition.

// false

// 0

// -0

// 0n (BigInt zero)

// "" (empty string)

// null

// undefined

// NaN