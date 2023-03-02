let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// signum
// A signum function returns 1 for numbers greater than zero and
//  -1 for numbers less than zero and 0 for an input of 0. 
// Write a signum implementation that takes a float N and returns an integer.

// Input
// One line containing a decimal number.
// N

// Output
// One integer, denoting the output value.

// Example
// Input:

// -0.87

// Output:

// -1

function signum(testInput){
	if(  testInput > 0){
        return 1
    }
    else if(testInput < 0){
        return -1
    }
    else if(testInput == 0){
        return 0
    }  
    
    
}

// Please do not edit the code below this line.

let testInput = parseFloat(readLine());
console.log(signum(testInput));