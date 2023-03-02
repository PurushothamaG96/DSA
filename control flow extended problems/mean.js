let fs=require("fs")
let data=fs.readFileSync("d:/java script/control flow extended problems/untitled-1.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Mean
Given the marks of n students, calculate the mean.

Note: If the result is a decimal Value, print it's floor value.

Input
First line contains an integer, denoting n.

Second line contains n space seperated integers, denoting the marks.

Output
One Integer, denoting the mean of the marks.

Example
Input:

4
56 67 30 82
Output:

58
Explanation:

56+67+30+82 = 235
Mean = 235/4 = 58.75
floor(58.75) is 58
So, the Output is 58.
123456789
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
You haven't made any submissions yet*/
var n=parseInt(readLine());
var marks=readLine().split(" ");
var count=0;
for (let i=0;i<n;i++){
    count+=parseInt(marks[i]);
}
var mean=(count/n)
console.log(parseInt(mean));