let fs = require("fs");
let data = fs.readFileSync("D:/java script/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let m=parseInt(readLine())
let n=parseInt(readLine())
if (n<0){
	console.log(-1);
}
else{
	for(let i=m;i<=n;i++){
        if(i>=0){
            console.log(i);
        }
	}
}