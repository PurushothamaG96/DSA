let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Geometric progression 3 numbers are 2,4,8 and find the 4th number by using geometric progression*/

let a1 = parseInt(readLine()) //access the first input
let a2 = parseInt(readLine()) //access the second
let a3 = parseInt(readLine())  // access the third input
let r=a2/a1  // finding r value by deviding operator
console.log(a3*r)//GP formula is a*r**(n-1), n is which number have to find.