const { count } = require("console");
const { checkPrime } = require("crypto");
let fs = require("fs");
const { isBoxedPrimitive } = require("util/types");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*
Detective
Description
Prasun, a wanna be detective, has been assigned a case after his continuous failure at solving any. This is the murder of Snehashis who was killed last night. Prasun has already made some guesses on who could be the murderer and it seems that the two murderers are communicating via some strange arrangement of words. As prasun has been involved at solving cases of such fashion, he is making some guesses on what the message could probably be. Though he is pretty smart (:P), you have to help him by checking whether his guess is actually a possible one from the messages received.

Basically you need to check whether you can get the guessed message using the characters of the recieved message!!!!!!!!!!!

Note : Strings are case insensitive.

Input
First line contains T which is the number of test cases.

For each test case first line is Message Received.

For each test case second line is Message Guessed.

Output
For each input, output YES if the guess is correct else print NO.

Example
Input:

1

jogod #! siara.

raja is good!

Output:

YES
*/


function detective(c, a){
    let map = new Map()
    for(let i = 0; i < c.length; i++){
      for(let j = 0; j < c[i].length; j++){
        let each = c[i]
        if(map.has(each[j])){
          map.set(each[j], map.get(each[j])+1)
        }
        else{
          map.set(each[j], 1)
        }
      }
    }
    
    for(let i = 0; i < a.length; i++){
      for(let j = 0; j < a[i].length; j++){
        let ans = a[i]
      if(!map.has(ans[j])){
        return "NO"
      }
      else{
        if(map.get(ans[j]) >0){
          map.set(ans[j], map.get(ans[j])-1)
        }
        else{
          return "NO"
        }
      }
    }
  }
    return "YES"
  }
  
  
  let testCase = parseInt(readLine())
  while(testCase--){
    let code = readLine().split(" ")
    let answer = readLine().split(" ")
    console.log(detective(code, answer))
  }
  