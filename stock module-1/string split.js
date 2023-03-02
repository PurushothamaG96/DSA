let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/* string split its a function to divide or split the array if we want
lets take an example [purushotham achar}
    after array shows [purushothama, achar]*/

let number=readLine()//example-204050
let array=number.split("0")
console.log(number)
console.log(array)
/* in that array lets acces the string*/
let a1= array[0]
let a2=array[1]
let a3=array[2]
console.log(a1,a2,a3)
let product=(a1*a2*a3)
console.log(product)
