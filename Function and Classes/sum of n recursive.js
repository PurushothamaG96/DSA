let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/* number given start from 
input
5
output
1 1
2 3
3 6
4 10
5 15
*/




let number = parseInt(readLine())
let serialStart = 1
let sum = 0
function sumOfN(serialStart){
    if(serialStart <= number){
        sum = sum + serialStart
        console.log(serialStart, sum)
        serialStart = serialStart + 1
        sumOfN(serialStart)
    }
    else {
        return
    }

}
sumOfN(serialStart)