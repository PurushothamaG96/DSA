let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// Factorial: Iterative
// Description
// Write a program that computes the factorial of a given integer. 
// Your implementation should be iterative in nature. 
// Factorial of an integer n is defined as Factorial(n) = 1*2*3*....*(n-2)*(n-1)*n.
//  Factorial(0) is defined as 1. Factorial of a negative integer is undefined.

// Input format
// One line containing an integer n.

// Output format
// One line containing the factorial of n.

// Sample input
// 5
// Sample output
// 120
// Explanation
// Factorial of 5 is 1*2*3*4*5 which is 120.

// Sample input
// -4
// Sample output
// undefined
// Explanation
// Factorial of a negative integer is undefined.



function factorial(number){
    fact=1
    if (number<0){
        return 
    }
    else if ( number == 0){
        return 1
    }

    else if( number > 0){
        for (let i = 1; i <= number ; i++){
            fact*=i;
            
        }
        return fact
    }
    
    }
    let number = parseInt(readLine());
    
    
    console.log(factorial(number));