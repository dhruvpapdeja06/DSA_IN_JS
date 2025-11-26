// while loop --> syntax --run unit , block inside condition is true.

// same work we can do with for loop 

// difference between for vs while  --> In for no of iteration is known bt in while loop , when iteration is unknown ,at certain condition to stop.(shopping 5000). 

// Example --> for (empty the bucket with jug and pour 3 times in while loop unitl half bucket empty)

/*
i = 0;
while(5 > i){
    console.log("Working");
    i++;
}
    */

// 1. Sum of digit
let number = 2347;
let sum = 0;

while (number > 0 ){
    let rem = number % 10;
    sum  = sum + rem;
    number = Math.trunc(number / 10); 
}
console.log(sum);

// 2.reverse of a number
let no = 1234555;
let rev = 0;
while( no > 0){
    let rem = no % 10;
    rev = (rev*10) + rem ;
    no = Math.trunc(no/10);
}
console.log(rev);

// 3. ISBN number(International Standard Book Number)--> It is a unique identification number given to every book number.

/*
ISBN: 978-3-16-148410-0

Each part has meaning:

978 → Book industry code

3 → Language/country code (here German-speaking region)

16 → Publisher

148410 → Specific book

0 → Check digit (used for error checking) 
*/


// There are of 2 types first (10digit) --formula (1*d1 + 2*d2 ...10*d10) % 11 = 0
// for 13 digit number --> validation rule (1*d1 + 3*d2 + 1*d3 + 3*d4 + ....d13) mod 10 = 0

// Solve without using predefined function
// 897 + "" -> "897"

/*
let t = 4978;
let temp = t + "";
console.log(temp);
console.log(temp.length);
*/

// count the digit with core logic
/*
let num = 38394;
let temp = num;
let count = 0;
while(temp > 0){
    count++;
    temp = Math.floor(temp/10);

}
console.log(count);
*/

// 10 digit ISBN number
/*
let ISBN = 1933988177;
let copy = ISBN;
let count = 0;
while( copy > 0){
    count++;
    copy = Math.floor(copy/10);
}

if(count == 10){
    let ans = 0;
    while(ISBN > 0){
        let digit = ISBN % 10;
        ans = ans + (digit*count);
        count--;
        ISBN = Math.floor(ISBN / 10);
    }
    console.log(ans);
    console.log(ans % 11 == 0 ?"Valid ISBN":"Invalid ISBN");
    }else console.log("Invalid ISBN")
*/

// 13 digit ISBN number;

let num = 9780306406157;
let count = 0;

let copy = num;
while (copy > 0 ){
    count++;
    copy = Math.floor(copy / 10);
}
// console.log(count);

if (count != 13){
    console.log("Invalid ISBN");
}else{
    let sum = 0;
    while(count > 0 ){
        let digit =  (num % 10);
        if( count % 2 == 0){
            sum = (3*digit) + sum;
        }else sum = sum + (1*digit);
        count--;
        num = Math.floor(num/10);
    }
    console.log(sum % 10 == 0 ?"Valid":"Invalid")
}



// Automorphic number --> the square of given no unit digit should be same

/*
let count = 0;
let num = 76;

let sq = num*num;
let copy = num;
while(copy > 0){
    count++;
    copy = Math.floor(copy / 10);
}

if(sq % Math.pow(10,count)==num) console.log("Automorphic");
else console.log("No Automophic");

*/
