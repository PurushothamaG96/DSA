let fs = require("fs");
let data = fs.readFileSync("D:\hesaru.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Square Sum
Given a natural number n as input, find the sum of squares of first n natural numbers.

Input
One Integer, denoting n.

Output
One Integer, denoting the required sum.*/
let n=(readLine());
let myArray=n.split(" ")
let 
let sumOfSquare=a+b+c;
console.log(sumOfSquare);