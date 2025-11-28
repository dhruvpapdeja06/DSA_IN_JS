// String --> combination / sequence of characters store.
// Alphanumberic Data store (string + number)

// Some people say that string is array of characters but it is not true.

let fname = "Ranjeet";
console.log(typeof fname);

console.log(fname[2]); //This behaviour look like array 
console.log(fname.length);

// Imuutable in nature not change in actual space
fname[3] = 't';
console.log(fname);

// Method of string
console.log(fname.slice(1,5));
console.log(fname.slice(5));
console.log(fname.slice(-4));
console.log(fname.slice(-4,-3)); // last sa char
console.log(fname.slice(5,1));  //start index > second index then nothing
console.log(fname.substring(5,2)); //swap and give it here not work for negative

let lname = "AKha Jindgi";

// Acutal data not change
console.log(fname.concat("Rangeela ", "AKha"));

// Reassign the data in string new space allocate 
let s = "      sheriyans ";
s = s.trim();
console.log(s);

console.log(s.indexOf("her")); //If not exists then -1
console.log(s.includes("hery"));


let str = "Hello budy how are you";
console.log(str.split(" ")); // Give array of string

console.log(s.charAt(5));

// 1. Accept a string from user and print its each character on a new line.
let prompt = require('prompt-sync')();

/*
let string = prompt("Enter the string : ");

for(let i=0; i<string.length; i++){
    console.log(string.charAt(i));
}

charCodeAt(i) //ASCII value
*/

// Accept a string and print it in reverse order

/*
let string = prompt("Enter the string : ");
let rev = "";

for(let i=string.length-1; i>=0; i--){
    rev = rev + string.charAt(i); //here i am reassigning in the rev then new space allocated.
} 
console.log(rev);
*/

// Check string is palindrome using two pointer

/*
let pal = 'malayalam';
let i=0, j=pal.length-1;

let isPal = true;
while( i < j){
    if(pal[i] !== pal[j]){
        isPal = false;
        break;
    }
    i++;
    j--
}
console.log(isPal);
*/


// ----------------------------------Part -2 -----------------------------------------------------------

// Toggle each alphabet of String
/*
let string = prompt("Enter a String : ");
let ans = "";

for(let i=0; i<string.length; i++){
    let ascii = string.charCodeAt(i);
    if( ascii >= 65 && ascii <=90) {
        ans = ans + String.fromCharCode(ascii + 32);
    }else{
        ans = ans + String.fromCharCode(ascii - 32); //convert the ascii value to char - for small to capital diff is 32
    }
}
console.log(ans);
*/

// Take an array of strings words and a String Prefix. Print the number of Strings in words that contain pref as a prefix.

/*
let word = ['pay','attention','practise','attend'];
let pre = 'at';
let count = 0;

for(let i=0; i<word.length; i++){
    if(word[i].startsWith(pre)) count++;
}
console.log(count);
*/


// Capitalize the first and last character of each word in th esentence and print the new sentence

/*
let word = "hello bhai kya haal chaal tere";
let array = word.split(" ");
let ans = "";

for(let i=0; i<array.length; i++){
    let string = array[i];
    let first = string.charAt(0).toUpperCase();
    let mid = string.substring(1,string.length-1);
    let last = string.charAt(string.length-1).toUpperCase();

    ans = ans + (first + mid + last) + " ";
}
console.log(ans);
*/

// Accept a string and print the frequency of each character present in the string

/*
let string = 'AdhdnsabBAeuduA';

let array = new Array(128).fill(0);

for(let i=0; i<string.length; i++){
    let ascii = string.charCodeAt(i);
    array[ascii] = array[ascii] + 1;
}

for(let i=0; i<array.length; i++){
    if(array[i] > 0 ){
        console.log(String.fromCharCode(i) + "-->" + array[i]);
    }
}*/
// console.log(array);

// If only small charactes and store in 26 size of array
/*
let string = "abhdsdsaharsdfjw";
let array = new Array(26).fill(0);

for(let i=0; i<string.length; i++){
    let ascii = string.charCodeAt(i);
    array[ascii -97] = array[ascii - 97] + 1;
}

for(let i=0; i<array.length; i++){
    if(array[i] > 0){
        console.log(String.fromCharCode(i+97) + "-->" + array[i]);
    }
}
*/

// Check two strings are Anagram or Not (Anagrams words have the same word length & characer count )

/*
let str1 = "state";
let str2 = "taste";

let arr1 = new Array(26).fill(0);
let arr2 = new Array(26).fill(0);

for(let i=0; i<str1.length; i++){
    let ascii = str1.charCodeAt(i);
    arr1[ascii-97] = arr1[ascii-97] + 1;
}

for(let i=0; i<str2.length; i++){
    let ascii = str2.charCodeAt(i);
    arr2[ascii-97] = arr2[ascii-97] + 1;
}

let isAnagram = true;
for(let i=0; i<26; i++){
    if (arr1[i] != arr2[j]){
        isAnagram = false;
        break;
    }
}
console.log(isAnagram?"Anagram":"Not a Anagram");
*/

// Other way with single array
/*
let str1 = "state";
let str2 = "taste";

let array = new Array(26).fill(0);
let isAnagram = true;

if( str1.length != str2.length) isAnagram = false;

for(let i=0; i<str1.length; i++){
    let ascii = str1.charCodeAt(i) - 97;
    array[ascii]++;
    let ascii2 = str2.charCodeAt(i) - 97;
    array[ascii2]--;
}
for(let i=0; i<26; i++){
    if(array[i] != 0) isAnagram = false;
}
console.log(isAnagram?"Anagram":"Not a Anagram");
*/


// Maximum Number of words found in Sentences.
// let str1 = "I love my India";

// let max = str1.split(" ");
// console.log(max.length);

/*
let str1 = "hello    world";
let split = str1.split(" ");
console.log(split); 

Here it not works for that we have regex
*/

/*
let str1 = "Hello    9   world";
let split = str1.split(/\s+/);
console.log(split);

console.log(split.length);

*/

// Sort the words of the sentence
// Lexographioc order

let str1 = "taj mahal is situated at agra";
// let ans = str1.split(" ").sort().join(" ");
let ans = str1.split(" ").
            sort((a,b) => a.length-b.length).join(" ");

console.log(ans);

// A compartor is function you pass inside .sort that tell JavaScript how to arrange items.
// str.localeCompare(str2)  alphabetically compare