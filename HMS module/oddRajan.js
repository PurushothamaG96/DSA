const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*
Rajan is odd
Description
Given an array of numbers of size (2*n+1).Raja is unable to find the number which is present odd number of times.It is guaranteed that only one such number exists.Can you help Raja in finding the number which is present odd number of times?

Input
First line contains value of n. Second line contains (2*n+1) array elements.

Output
Print the required number.

Example
Input:

2

1 2 3 2 1

Output:

3

Explanation
For first input only 3 is the number which is present odd number of times.


*/

let n = parseInt(readLine())
let array = readLine().split(" ").map(Number)
let map = new Map()
for(let i = 0; i < 2*n + 1; i++){
    if(map.has(array[i])){
        map.set(array[i], map.get(array[i])+1)
    }
    else{
        map.set(array[i], 1)
    }
}
for(let i = 0; i < 2*n + 1; i++){
    if(map.get(array[i]) % 2 !== 0){
        console.log(array[i])
        break
    }
}