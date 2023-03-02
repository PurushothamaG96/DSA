const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}



class InputReader{
    constructor(n){
        this.noOfInput = n

    }
    readStrings(){
        for(let i = 0; i < this.noOfInput; i++ ){
            let string = readLine()
            console.log(i, string )
        }

    }
    readIntegers(){
        for(let i =0; i < this.noOfInput; i++){
            let int = parseInt(readLine())
            console.log(i, int)
        }

    } 
    readFloats(){
        for(let i =0; i < this.noOfInput; i++){
            let flt = parseFloat(readLine())
            console.log(i, flt.toFixed(2))
        }

    }
}
let input = new InputReader(parseInt(readLine()))
let type = readLine()
if(type == "string" ){
    input.readStrings()
}
else if(type == "integer"){
    input.readIntegers()
}
else{
    input.readFloats()
}