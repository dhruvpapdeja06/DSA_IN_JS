// Operator

// Arithmetic Opertator

// division operator --> give the quoitient (In static lang int/int --> int) but in dynamic we get float  
console.log( 10 / 5 );
console.log( '10' / 3 ); //float value (In DSA we always want when (int/int) get value also int)
console.log( Math.floor(16/3));
console.log( Math.floor(44.88 / 8)); //previous --> 5.61
console.log( 22.11 / 9.8);

// modulo operator
console.log(19.5 % 6); 
console.log(18.0%6);
console.log(18.5 % 6); 
console.log(18.5 % 7); 
console.log(Math.floor(18.5 % 7)); 
console.log(19 % 6);
console.log(2/10); //here 2 is dividend and 10 is divisor --> 2 is

let num = 234543; // last digit will remvove
num = num / 10;
console.log(Math.floor(num));

// Only want last digit
console.log(Math.floor(num % 10));

// Comparision Operator
console.log( 10 >= 5 );
console.log( 44 < 77 );

// Difference between == and === 
console.log('9' == 9); //value check only not type
console.log('9' === 9);
console.log(10!=10);

// Logical Operator
console.log(12 > 7 && 5 < 66); // if any conditon false then false ,or first condn false don't check further it run mperced rule
console.log(!(77>22 || 44 < 33 && 9> 8)); // T to F 

// Unary Operator --> work on single operand
// increment and decrement--> pre,post

// Dhaba (post) --> first eat then pay
// Dominos --> First pay then eat

let price = 100;
let mrp = price++;
console.log(mrp);
console.log(price);

//error
// let a = 10++ 
//++(++a) --> Not allowed --> SyntaxError --> Invalid left-hand side expression in prefix operation
// ++("") --> Not allowed 

let a = 12;
let b = 15;
let c = 8;
let d = a++ + --b - c++ + ++a; //12+14-8+14
console.log(d); //32

let a1 = true;
console.log(a1++);
console.log(a1++);