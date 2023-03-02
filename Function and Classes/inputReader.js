let fs=require("fs")
let data=fs.readFileSync("./stock module-1/edit.txt","utf-8")
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


class InputReader {

	readStrings(num){
        for(let i = 0; i < num; i++){
            console.log(i, readLine())
        }

    }
    readIntegers(num){
        for(let i = 0; i < num; i++){
            console.log(i, parseInt(readLine()))
        }

    }
    readFloats(num){
        for(let i = 0; i < num; i++){
            console.log(i, parseFloat(readLine()).toFixed(2))
        }

    }



};


let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();	
if (typeOfInput === "string") {
		NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
		NewInputReader.readIntegers(num);
} else {
		NewInputReader.readFloats(num);
}