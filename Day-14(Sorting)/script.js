// Sorting --> Arranging the data is ascending order or descending order.

// Difference between stable sort vs unstable sort

// (3,A) , (1,B) , (4,C), (3,D)  --> In stable sort duplicate element After sorting as it's get
// (1,B) , (3,A), (3,D), (4,C) --> Stable sort but in unstable sort we can't say duplicate element as it mila.

// Bubble Sort

/*
let arr = [5,3,8,1,6];

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log("After sort array is : ", arr);
*/

// Selection sort
/*let arr = [9,8,1,4,10,23,];

for(let i=0; i<arr.length-1; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j] < arr[min]){
            min = j;
        }
        }
        if(min != i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
    }
}
console.log(arr);
*/

// Insertion Sort
let arr = [9,8,1,4,10,23];

for(let i=1; i<arr.length; i++){
    let key = arr[i];
    let j = i-1;
    while( j>=0 && arr[j]>key){
        arr[j+1] = arr[j];
        // console.log(arr);
        j--;
    }
    arr[j+1] = key;
    // console.log(arr);
}
