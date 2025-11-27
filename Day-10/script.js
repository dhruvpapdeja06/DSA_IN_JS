// (Nested Programmming ) --> Help in solving Nested loop problem. 
// Pattern Programming --> Lots of Problem we can solve like Bubble Sort.

// When i want to perform n of task in all task k no of task execute.

// Program for strong number

// n = 145 --> 1! + 4! + 5! --> after factorial , sum it and get the same digit.

let prompt = require("prompt-sync")();

// let num = Number(prompt("Enter a number"));

// let ans = 0;
// let copy = num;
/*
while(num > 0){
    let digit = num % 10;
    let fact = 1
    for(let i=1 ; i<=digit; i++){
        fact = fact * i ;
    }
    ans = ans + fact;
    num = Math.floor(num / 10);
    // console.log(ans);
}
if (ans == copy) console.log("Strong Number");
else console.log("Not a Strong Number");
*/


// 1. Pattern ---> * * * * * 

/*
process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");
process.stdout.write("* ");

*/

let num = Number(prompt("Enter a number of star to print : "));

/*
for(let i=1; i<=num; i++){
    process.stdout.write("* ");
}
console.log("\n ");

// (Vertical print)

for(let i=1; i<=num; i++){
    console.log("* ");
}*/

// 3. Horizontal and vertical print n of times (Nested loop)

/*
for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
        process.stdout.write("* ");
    }
    console.log("")
} */

// 4. Right Angle Triangle
/*
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log("");
}
    */


// 5.Right Angle with number increment
/*
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j + " " );
    }
    console.log("");
} */

// 5. Inverted loop pattern

/*
for(let i=1; i<=num; i++){
    // for(let j=1; j<=num-i+1; j++)
        for(let j=num; j>=i; j--){
        process.stdout.write("* ");
    }
    console.log("");
} 
*/

// 6. Mirror right angle triangle 

/*
for(let i=1; i<=num; i++){
    for(let j=1; j<=num-i; j++){
        process.stdout.write("  ");
    }
    for(let j=1; j<=i;j++){
        process.stdout.write("* ");
    }
    console.log("");
}
*/

// Pyramid Triangle
/*
for(let i=1; i<=num; i++){
    for(let j=1; j<=num-i; j++){
        process.stdout.write(" ");
    }
    for(let j=1; j<=i;j++){
        process.stdout.write("* ");
    }
    console.log("");
}
*/


// Print X Pattern 
for(let i=1; i<=num; i++){
    for(let j=1; j<=num; j++){
        if(i==j || i+j==num+1) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    console.log(" ");
}

// V Pattern
for(let i=1; i<=num; i++){
    for(let j=1; j<=2*num-1; j++){
        if( i==j || i+j==2*num) process.stdout.write("* ");
        else process.stdout.write(" ");
    }
    console.log("");
}