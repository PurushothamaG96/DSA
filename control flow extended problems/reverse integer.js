let fs=require("fs")
let data=fs.readFileSync("d:/java script/ACA module-2/dataStore.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// reverse integer
// Given an integer, reverse digits of an integer

// Input
// 1 line containing the integer to reverse

// Output
// 1 line containing the reversed integer

// Example
// Input: 123

// Output: 321

// Input: 120

// Output: 21 because starting 0 can be removed

// Input: -123

// Output: -321
// let n=readLine().split('')
// let m=[]
// for(let i=n.length-1;i>=0;i--){
//     m.push(n[i])
// }  
// m=m.join('')
// console.log(parseInt(m))



let n=parseInt(readLine())

let p=false
if(n<0){
    p=true;
    n=(-1)*n;
}
let res=0
while(n>0){
    
    let temp=n%10
    res=res*10+temp
    n=parseInt(n/10)
        
    
}
if(p===true){
    res=(-1)*res;
}
console.log(res)