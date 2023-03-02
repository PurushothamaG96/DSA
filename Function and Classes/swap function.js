let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Swap Function
Given two integers a and b, you need to write a function to swap the their values.

Note: Write a function, and do the swapping operation in the function only.

Input
First line contains an integer denoting a

Second line contains an integer, denoting b

Output
First line denoting the value of a after swapping.

Second line denoting the value of b after swapping.

Example
Input:

30
110
Output:

110
30
*/
function swapFunction (a , b){
    let temp =  [a , b] = [b, a]
    return temp;
}
let firstElement = parseInt(readLine());
let secondElement = parseInt(readLine());
let result = swapFunction(firstElement, secondElement)
for (let i = 0; i < result.length; i++){
    console.log(result[i])
}
