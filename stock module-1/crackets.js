let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Crackers
Kumar has decided to distribute N Crackers to K users of as evenly as possible. When all the crackers are distributed, find the minimum possible (absolute) difference between the largest number of crackers received by a user and the smallest number received by a user.

Input
Two space seperated Integers, denoting N, K respectively.

Output
One integer, denoting result.

Example
Input1:

7 3
Output1:

1
Explanation1:

When the users receive two, two and three crackers, respectively, 
the (absolute) difference between the largest number of crackers received by a user and the 
smallest number received by a user, is 1.*/
let crack=readLine().split(" ");
let N=parseInt(crack[0]);
let K=parseInt(crack[1])
let rem=N%K;
let div=parseInt(N/K);
let ab=K*rem
if(div===rem){
    console.log(0)
}
else if(ab<N){
    console.log(rem)
}
else{
    console.log(div)
}
