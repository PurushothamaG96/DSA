let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


/*
Palindrome
Check if the given string is a palindrome string.

A sequence is said to be palindrome if reverse of the sequence is same as the initial sequence.

Input
Single line containing a string with no end of line character.
String sequence contain only alphabets. 
Consider lower case letters as equivalent to upper case letters.

Output
Single containing YES if it is a palindrome

Single containing NO if it isn't a palindrome

Example
Input:

Tenet

Output:

YES
*/
//algorithm
// take input
//make lower case and split("")
//compare

let input = readLine().toLowerCase()
let string = input.split("")
let result = "YES"
if
for(let  i = 0;i <= string.length/2 ; i++){
    if(string[i] !== string[string.length-1 - i]){
        result = 'NO'
        break;
    }
    
}
console.log(result)

