let fs=require("fs")
let data=fs.readFileSync("d:/java script/ACA module-2/dataStore.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// Clock
// Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

// Input
// Two space seperated values denoting num1, num2 respectively.

// Output
// One integer, denoting the required result.

// Example
// Input1:

// 5 7
// Output1:

// 12
// Input2:

// 5 10
// Output2:

// 3
let n=readLine().split(' ')
let a=parseInt(n[0]);
let b=parseInt(n[1]);
let total=a+b;
if(total===12&&total===12){
    console.log(12)
}

else if(total>12){
    console.log(total-12);
}
else if(total<12){
    console.log(total)
}
