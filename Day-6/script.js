// Why we need loop 

// (Want to print "Hello World" -- 5 times) Just print with console.log("Hello World") --> now want 100 times we can do manually but consume extra space and human effort and possibility of mistake .if we want 1 lakh time then consume memory and time there is any way we can perform this repetion task within a certain condition then we have loops (We also have recursion)

// To reduce the file size,efforts, and time --> loops

// Implementation --> do-while,for,while.

// Type of loops

// Entry control loop , Exit control loop 

/*
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World"); */


// Entry control --> 
// Example (To use any application/task exection , before that we have to satisfied  the condition  ) --> like login

// Exit control --> 
// One time before asking the condition loop work but next time ask the condition (do-while)

// for --> Block of code , take optional 3 parameter
// (initial/declare ; condition ; change)

let n  = 5;
// if i remove  i ++ , infinite time ( value not change ) --> code is valid , remove the condition then inifinte time  for(;;) --> inside for loop we have counter variables that control the loop 
for(let i=0; i<5; i++){
    console.log("Hello World");
}

