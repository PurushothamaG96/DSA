const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let No_house  = parseInt(readLine())
if(No_house > 0){
    let incomesArray = []
let no_of_chiledren = []
let sum = 0
let cont = 0
for(let i = 0; i <No_house; i++){
	incomesArray.push(parseInt(readLine()))
}
for(let i = 0; i < No_house; i++){
	no_of_chiledren.push(parseInt(readLine()))
}
for(let j = 0; j < No_house; j++){
	if(no_of_chiledren[j] > 2 && incomesArray[j]>0){
		sum += incomesArray[j]
		cont++
	}
}
if(cont != 0){
    let avarage = sum/cont
    console.log(Math.floor(avarage))

}
else{
    console.log(-1)
}
}
