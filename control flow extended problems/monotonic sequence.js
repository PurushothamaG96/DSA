let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*Monotonic Sequence
Given a sequence of integers, check if it is monotonic or not.
 A sequence is called monotonic if it is either non-increasing or non-decreasing.

Input
First line contains an integer n, denoting the number of elements in the sequence.

Next n lines contain one integer each..

Output
1 if the given sequence is monotonic.

0 if the given sequence is not monotonic.

Example
Input:

5
3
12
34
34
56
Output:

1*/

let n=parseInt(readLine())
let arr=[]
let count=1
count1=1
for(i=0; i<n; i++){
    arr[i]=parseInt(readLine());
}
let inc=true;
let dec=true;
for(let i=0;i<n-1;i++){
    if(arr[i]>arr[i+1]){
        dec=false
    
}
}
for(let i=0;i<n-1;i++){
    if(arr[i]<arr[i+1]){
        inc=false
    }
}


    
