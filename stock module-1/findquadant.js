let fs = require("fs");
let data = fs.readFileSync("d:/java script/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let n=parseInt(readLine())
let m=parseInt(readLine())
console.log(n)
console.log(m)