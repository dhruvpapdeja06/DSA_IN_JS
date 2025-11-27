// DSA --> Orgainze the data to perform operation like search,sort and manupulation on it.

// Arrays,Linked List --> Example of Linked List like tab of webbrowser, photos in gallery to swipe left or right

// File System is an example of Tree

// Linear Data Structure --> In one level like array and LL.
// Non Linear Data Structure --> Not same level in hierarchy. 

// Array --> Store multiple value in contiguous Memory Location.
// Store the object or information of student , can acess the value with the help of index.

// Syntax 
// In Js we can multiple data type value.

let arr = [10,39,283,2839,33,393];
console.log(arr);

// indexing
console.log(arr[3]);

// for(let i=0; i<arr.length; i++){
//     process.stdout.write(arr[i] + " ");
// }

// dynamic type 
let arr1 = new Array(3).fill(true);
console.log(arr1);
// console.log(arr1); //[ <3 empty items> ]
arr1[0] = 10;
arr1[1] = 20;
arr1[2] = 30;
arr1[3] = 40;
console.log(arr1);

// mulitiple type value store
let arr2 = [1,"3", "hy",[7,9]];
console.log(arr2);

let arr4 = new Array(3);
arr4.push(100); // length ka beyond data will fill
arr4.unshift(11);
console.log(arr4);

// Accept value from the user and assign in the array
let prompt = require("prompt-sync")();

/*
let size = Number(prompt("Enter the size of an Array: "));
let array = new Array(size);

for(let i=0; i<array.length; i++){
    array[i] = Number(prompt("Enter element in the array : "));
}
console.log(array);
*/

// 2. Sum of array's element
/*let size = Number(prompt("Enter the size of an Array: "));
let array = new Array(size);
let sum = 0;

for(let i=0; i<array.length; i++){
    array[i] = Number(prompt("Enter element in the array : "));
}

for(let j=0; j<array.length; j++){
    sum = sum + array[j];
}

console.log(array);
console.log("Sum of array is : ", sum);
*/


// Maximum element from the array 
// let array = [5,88,99,100,2];

// let maxArray = array[0];

/*
for(let i=1; i<array.length; i++){
    if (array[i] > maxArray){
        maxArray = array[i];
    }
}
console.log(maxArray);
*/

// Second max element from the array
/*
let array = [88,5,83,99,100,23,1,0,890];
let max = Math.max(array[0],array[1]);
let sMax = Math.min(array[0],array[1]);

for(let i=2; i<array.length; i++){
    if(array[i] > max){
        sMax = max;
        max = array[i];
    }
    else if((array[i] > sMax) && (array[i] != max)){
        sMax = array[i];
    }
}
console.log(sMax,max); */



// Do same for the min element and second min element --task
let test = [3,9,1,0,-3,-9];
let min = test[0];

for(let k=1; k<test.length; k++){
    if(test[k] > min){
        k++;
    }else{
        min = test[k];
        k++;
    }
}
console.log("Min ELement is : " + min);



// Reverse the array
// Extra space , without extra space
/*
let array = [10,20,30,40,60];

let temp = new Array(array.length);

let i=array.length-1;
for(let j=0; j<array.length; j++){
    temp[j] = array[i];
    i--;
}*/
// console.log("Reverse Array is : ", temp);
// console.log("Original Arrray is : " , array);

// Without extra space --> two pointer approach

/*
let array = [88,33,99,0,1,2,3];

let i = 0, j = array.length-1;

while(i<j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--
}

console.log(array);
*/

// All the zeros to left and all one to right
/*let a = [1,1,0,0,1,0,0,1,0,1];

let i = 0,j = 0;

while(i < a.length){
    if(a[i] === 0){
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
        j++;
    }
    i++;
}
console.log(a);
*/

// Move all the negative elements on the left side and positive elements on the right side.

let array = [4,6,2,-2,6,3,-1,-44];
let left = 0, right = array.length-1;

while(left < right){
    if(array[left] < 0){
        left ++;
    }else if(array[right] >= 0){ 
        right--;
    }else{
        [array[left],array[right]] = [array[right],array[left]];
        left++;
        right--;
    }
}
console.log("Array is: "+ array);



/*
// push --> inserting from last
arr.push(99);
console.log(arr);

// pop --> deletion from last
arr.pop();
console.log(arr);

// unshift ==> insertion from start

arr.unshift(222);
console.log(arr);

// shift ==> deletion from start
arr.shift();
console.log(arr);
*/

