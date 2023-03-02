let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let fruits  = ['orange', 'banana', 'mango']
arr = fruits.slice(0, 1).concat(fruits.slice(1 + 1))
console.log(arr)