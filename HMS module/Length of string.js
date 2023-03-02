let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


/*
Len of Longest Word
Given a string S, find the length of the longest word in the string. 
The words are separated by Spaces. If no such word exists, print 0

Input
one line containing the String S

Output
one line containing the length of the longest word in the String S

Example
Input: hello world

Output: 5 - because both words are of length 5

Input: helloooooo world

Output: 10 - because "helloooooo" is of length 10
*/

/*
algorithm
first take input
length count 
*/

let string = readLine().split(" ");
let count = 0;
let result = 0;
for(let i = 0; i < string.length; i++ ){
    count =string[i].length;
    if(count > result){
        result = count
    }
}
console.log(result)

