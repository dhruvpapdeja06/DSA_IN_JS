// Searching

// Linear Search --> Search element is seqential way
/*
let arr = [20,10,30,50,44,14,12,0,88];
let target = 12;
let idx = -1;

for(let i=0; i<arr.length; i++){
    if(target == arr[i]){
        idx = i;
        break;
    }
}
console.log(idx == -1 ?"Not Found":"Found");
*/

// If element present at the end then O(n) T.C

// Binary Serach --> Apply on Array sorted,range sorted, partition sorterd.

let arr = [3,5,8,12,16,21,26,45,89];
let search = 45;

let index = -1;
let start = 0,end = arr.length-1;

while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(arr[mid] == search){
        index = mid;
        break;
    }else if( arr[mid] < search){
        start = mid;
        mid = mid + 1;
    }else{
        end = mid;
        mid = mid -1;
    }
}
if(index == -1) console.log("Not Found");
else console.log("Element found at " + index);