const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}



let input  = readLine() 
let n = parseInt(readLine())
if(input.length == 1){
    console.log(input)
}
else{
    if(n === 0){
        for(let i = input.length-1; i >= 0; i--){
            input += input[i]
        }
        console.log(input)
    }
    else{
        for(let i = input.length-2; i >= 0; i--){
            input += input[i]
        }
        console.log(input)
    
    }

}
