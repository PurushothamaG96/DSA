let fs = require("fs");
let data = fs.readFileSync("d:/text.edit", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n=parseInt(readLine())
let array=[]
let odd=0
let even=0
for(let i=0;i<n;i++){
	let array.push[0]
}
let console.log(array)

