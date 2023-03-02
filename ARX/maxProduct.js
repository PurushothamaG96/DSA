let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*MAX product
You are given two arrays A and B. You have to select two integers, one from A and one from B.
 Let them be A[i] (0 <= i < length of array A) and B[j] (0 <= j < length of array B). 
 you have to find the maximum value of |A[i]XB[j]|.
note:- |x| is absolute value of x.
Input
first line contains the size of the array A which is followed by size of array B in line two. 
Next two lines contain the two arrays A,B as space separated values.
Note : Array length cannot be zero.
Output
Print the maximum value of |A[i]XB[j]|
Example
Input:
5
8
-3 4 5 2 1
7 4 2 4 5 3 -10 6
Output:
50
explanation
choose 5 from first A and -10 from B, the product is -50 whose absolute value is 50, 
which is the maximum possible product.
Submit a solution */


let firLine = parseInt(readLine());
let SecLine = parseInt(readLine());
let arr = readLine().split(" ");
let brr = readLine().split(' ');
let maxArr
let maxBrr
for ( let i = 0 ; i < firLine; i++){
    if (arr >= 0){
        arr[i] = parseInt(arr[i])
    }
    else{
        arr[i] = parseInt(arr[i])
        arr[i] = Math.abs(arr[i])
    }
}
for ( let i = 0 ; i < SecLine; i++){
    if (brr >= 0){
        brr[i] = parseInt(brr[i])
    }
    else{
        brr[i] = parseInt(brr[i])
        brr[i] = Math.abs(brr[i])
    }
}
maxArr = Math.max(...arr)
maxBrr = Math.max(...brr)
let product = maxArr*maxBrr
console.log(product)


