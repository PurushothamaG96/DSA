let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*College
Everyone is missing college these days. So the college admin has decided a digital reunion.

Just as a fun event, everyone is asked to find the sum of the divisors of your roll number (given).

Complete the given function to compute and return the sum of the divisors of the integer n.

Input
One integer, denoting n.

Output
One Integer, denoting the result.

Example
Input1:

15
Output1:

24
Explanation1:

Divisors of 15 are 1,3,5,15.

So, 1 + 3 + 5 + 15 = 24*/


function sumOfDivisors(n){
    sum = 0
    for( let i = 1; i <= n; i++  ){
        if( n%i == 0){
            sum = sum + n/i
            console.log(n/i)
        }
    }
    return sum
  }
  let n = parseInt(readLine());
  console.log(sumOfDivisors(n));