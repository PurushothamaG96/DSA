let fs = require("fs");
const { receiveMessageOnPort } = require("worker_threads");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function  lucky_seven(arr){
  if(arr.length<3){
    return false;
  }
  else{
    for(let i=0;i<arr.length;i++){
      if(arr[i]+arr[i+1]+arr[i+2]===7){
       return true;
      }
     }

  }
return false   
}
let arr=readLine().split(" ").map(Number);
console.log(lucky_seven(arr));