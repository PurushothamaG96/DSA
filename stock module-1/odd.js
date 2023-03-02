let fs = require("fs");
let data = fs.readFileSync("D:/java script/text edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let n=parseInt(readLine())
let odd=0
let even=0
for (let i=0;i<n;i++){
	let array=parseInt(readLine())
	if((array%2)===0){
		even+=1;
	}
	else{odd+=1}
}
console.log(odd)
console.log(even)