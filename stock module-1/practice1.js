let fs = require("fs");
let data = fs.readFileSync("d:/java script/text edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n=parseInt(readLine())
for(i=0;i<n;i++){
let x=readLine().split(" ")
parseInt(x[0])
parseInt(x[1])
if(x[0]>0&&x[1]>0){
    console.log("Q1")
}
else if((x[0]<0&&x[1]>0)){
    console.log("Q2")
}
else if((x[0]<0&&x[1]<0)){
    console.log("Q3")
}
else if((x[0]>0&&x[1]<0)){
    console.log("Q4")
}
    

}
