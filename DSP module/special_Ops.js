const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}



function specialOps(M, N, array){
    let numElements = M - N;
    let minSum = 0
    let maxSum = 0
    for(let i = 0; i < numElements; i++ ){
        minSum += array[i]                        
    }
    let len = array.length - numElements
    for(let j = array.length-1; j >= len; j--){
        maxSum += array[j]
    }
    return maxSum - minSum
}



let t= parseInt(readLine())
if(t >= 1 && t <= 10){
    while(t--){
        let twoInteger = readLine().split(" ")
        let M = parseInt(twoInteger[0])
        let N = parseInt(twoInteger[1])
        let arr = readLine().split(" ").map(Number)
        let array = arr.sort()
        console.log(specialOps(M, N, array))
    }
}
