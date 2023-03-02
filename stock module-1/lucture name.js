let fs = require("fs");
let data = fs.readFileSync("D:\hesaru.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a1=parseInt (readLine());
let a2=parseInt (readLine());
let a3=parseInt (readLine());

let d=(a2-a1);
let a4=a3+d;
if (a2-a1)=(a3-a1)
{console.log("undefined");
}
console.log(a4);