let fs=require("fs")
let data=fs.readFileSync("d:/java script/control flow extended problems/untitled-1.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
/*Armstrong
For a given 3 digit number, find whether it is armstrong number or not. An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. Print Yes if it is a armstrong number else print No.

Input
One integer, denoting the 3 digit number.

Output
One string, denoting Yes or No.

Example
Input1:

153
Output1:

Yes
Explanation:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153*/

// var n=parseInt(readLine())
// var a=n%10;
// var b=parseInt(n/10);
// var c=b%10;
// var d=parseInt(b/10);
// var total=(a**3+c**3+d**3)
// if (total===n){
//     console.log("Yes");
// }else{
//     console.log("No");
// }
 let n=parseInt(readLine())
 let count=0
 let input=n//153
 while(n>0){
  let m=n%10//3->5->1
  count=count+m**3//27+125->152+1->153
  n=parseInt(n/10)//15->1->0
 }
 console.log(count)
 if (count===input){
  console.log("Yes")
 }
 else{
  console.log("No")
 }