let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=3
result=0
for(i=1;i<=n;i++){
let tem=i*i
let total=result+tem}
console.log(total)