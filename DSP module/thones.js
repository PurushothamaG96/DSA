const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}





let I = parseInt(readLine())
let arrayI = readLine().split(" ").map(Number)
let J = parseInt(readLine())
let arrayJ = readLine().split(" ").map(Number)

for(let i = 0; i< I; i++){
    let count = 0
    for(let j = 0; j < J; j++ ){
        if(arrayI[j] <= I){
            count +=1
            if(arrayJ[i]<= count){
                console.log(count)
                break
            }
        }
    }
}
