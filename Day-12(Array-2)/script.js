// 1. Find the second smalles element in the array 

/*
let array = [3,8,9,-1,0,55];
let min = Math.min(array[0],array[1]);
let S_min = Math.max(array[0],array[1]);

for(let i=2; i<array.length; i++){
    if(array[i] < min){
        S_min = min;
        min = array[i];
    }else if(array[i] < S_min && array[i] != min){
        S_min = array[i];
    }
}
console.log(min,S_min);
*/

// Array left Rotation by 1 
/*
let arr = [1,2,3,4,5];

let temp = arr[0];
for(let i=1; i<arr.length; i++){
    arr[i-1] = arr[i];
}
arr[arr.length-1] = temp;

console.log(arr);
*/

//Right roataion by 1  --> [5,1,2,3,4]
/*
let arr = [1,2,3,4,5];
let last = arr[arr.length-1];

for(let i=arr.length-2; i>=0; i--){
    arr[i+1] = arr[i]; 
}
arr[0] = last;
console.log(arr);
*/

// Array left rotation by k elements. k =2 --> [3,4,5,1,2]

/*
let arr = [1,2,3,4,5];
let k = 5;
let count = 0;
k = k % arr.length
for(let j=1; j<=k; j++){
    let temp = arr[0];
    for(let i=1; i<arr.length; i++){
        arr[i-1] = arr[i];  
    }
    count++;
    arr[arr.length-1] = temp;
}
console.log(count);
console.log(arr);

*/

// Print the count of subarrays whose sum is equal to the target
let arr = [1,2,3,7,5];
let target = 12;
let count = 0;
for(let i=0; i<arr.length; i++){
    let sum = 0;
    for(let j=i; j<arr.length; j++){
        sum = sum + arr[j];
        if(target == sum){
            count ++;
        }
    }
}
console.log(count);