let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function recursion(initial){
    let array = []
    if(initial <= final){
        console.log(initial, final)
        array.push (initial)
        recursion(initial+ 1)    
    }
    else{ 
        return console.log(array)}
}


let testCase = parseInt(readLine())
let arr = []
let initial
let final
let num = 0
function noOfLines(num){
    if(num < testCase){
    arr = readLine().split(' ')
     initial = parseInt(arr[0])
     final = parseInt(arr[1])
     let array = []

     function recursion(initial){
        if(initial <= final){
            array.push(initial)
            const newNumber = initial + 1
            recursion(newNumber)    
        }
        else{ 
            return console.log(...array)}
    }
    
    recursion(initial)
}
else{
    return
}
let newNums = num+1
noOfLines(newNums)

}
noOfLines(num)
