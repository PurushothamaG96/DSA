let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

/*Even Odd Separator
Write a function which takes a list of positive integers and return a list 
with all the odd numbers at the start followed by even numbers.
All the odd numbers should appear in the same order as they present, similarly the even number.

Input
A list of positive integers

Output
list of integers

Example
Input:

[2,5,4,10,1,3,7,8,11,13,6]

Output:

[5,1,3,7,11,13,2,4,10,8,6]*/

function evenOddSeparator (array){
    for(let i = 0; i < array.length;){
            if(array[i] % 2 === 0 ){
                array.push(array[i])
                array.splice(i, 1)
                console.log (array)
                i = i
    }
    else {
        i++
    }
}
console.log(array)
    

}
let array = readLine().split(' ')
for ( let i = 0 ; i < array.length; i++){
    array[i] = parseInt (array[i] )
}
array.sort((a, b) => a-b)
evenOddSeparator(array)



