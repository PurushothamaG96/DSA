let fs = require("fs");
let data = fs.readFileSync("./stock module-1/edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*
Palindrome: Recursive
Description
A palindrome is a string that reads the same forward and backwards.
Write a function that reads a string and returns
True if the given string is a palindrome
False if the given string is not a palindrome
IMPORTANT
Your function should NOT use the following.
Loops (you can use a loop to read the test cases)
In-built functions like reverse
Input format
First line contains n, the number of test cases.
This is followed by n lines , each containing one input string.
Output format
n lines, each containing either True or False, depending on whether the corresponding input string is a palindrome or not
Sample input
2
tenet
ayashdashd
Sample output
True
False
Explanation
First line contains 2, meaning there are 2 test cases.
tenet is a palindrome. So first line of output is True.
ayashdashd is not a palindrome. So second line of output is False.*/

function input(n){
    let i = 0;
    let j = String.length-1
    if(count < n){
    let string = readLine().split("")
   
    function compare(i, j){
        if(string.length%2==0 && i<j && string[i]==string[j]){
            if(i = j-1){
                console.log(true)
            }
            else{
                i++
                j--
                compare(i,j)
            }
              
        }
        else if(string.length%2!==0 && j==i && string[i]==string[j]){
            console.log(true)
            return;
        }
        else{
            console.log(false)
            return;
        }


    }
}
else{ 
    return;
}
compare(i, j)
input(count)

}
let testCase = parseInt(readLine());
let count=0
input(testCase)
