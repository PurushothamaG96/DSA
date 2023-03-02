let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let a1=parseInt(readLine())
let a2=parseInt(readLine())
let a3=parseInt(readLine())
let average=(a1+a2+a3)/3
console.log(average)

