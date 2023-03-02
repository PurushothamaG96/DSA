let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Alternate 101
You have been given an array of size N. 
You need to find the sum of alternate values in the given array, starting from the first element.

Input
One integer, denoting N, the size of the array. 
The next line contains N space seperated integers, denoting the elements of the given array.

Output
One Integer, denoting the required sum.

Example
Input1:

7
1 4 6 8 9 0 -34
Output1:

-18
Explanation:

1 + 6 + 9 - 34 = -18*/

let n=parseInt(readLine())
let arr=readLine().split(" ")
let sum=0
if(n%2===0){
for(let i=0;i<n;i+2){
    let m=parseInt(arr[i])
        sum+=m
    }
  }
  else{
    for(let i=0;i<=n;i=i+2){
      let m=parseInt(arr[i])
      sum+=m
    }
  }


console.log(sum)