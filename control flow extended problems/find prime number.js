let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// Find if given number is prime
// Find if the given integer is prime number.

// Input
// FirstLine contains an interger specifying no. of test cases. 
// Each line contains integers specifying value of number in each test case.

// Output
// Yes if number is prime. No is not for each testcase.

// Example
// Input: 3
// 2
// 4
// 5

// Output: Yes

// No

// Yes
//------------------------------------------------------------------------------------------------------
// let n=parseInt(readLine())
// for(i=0;i<n;i++){
//     let num=parseInt(readLine())
//     let two=num%2
//     let three=num%2
//     if(num===2||num===3){
//         console.log("Yes")
//     }
//     else if(num>3&&two===0&&three===0){
//         console.log("No")

//     }
//     else{
//         console.log("Yes")
//     }
// }
//-----------------------------------------------------------------------------
let n=parseInt(readLine());
let arr=[];
for(i=0;i<n;i++){
    arr[i]=parseInt(readLine())
}
for(let i=0;i<arr.length;i++){
    let flag=0
    if(arr[i]==1||arr[i]==0){
        console.log("No")
        continue;
    }
    for(let j=2;j<=Math.sqrt(arr[i]);i++){
        if((arr[i])%j==0){
            flag=1
            break;
        }
    }
    if(flag==0){
        console.log("Yes")

    }
    else{
        console.log("No")
    }
    

}
