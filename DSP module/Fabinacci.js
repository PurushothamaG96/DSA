let fs = require("fs");
let data = fs.readFileSync("./HMS module/input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let fabnacci_number = parseInt(readLine())
if(fabnacci_number == 1){
    console.log(0)
}
else if(fabnacci_number > 0){
    let array = [0, 1]
    let sum = 0
    for (let i = 0; i < fabnacci_number - 2; i++){
        sum = array[i] + array[i+1]
        array.push(sum)   
    }

    for(i = 0; i< array.length; i++){
        console.log(array[i])
    }  
}
else{
    console.log(-1)
}

// let fabunacci_number = parseInt(readLine());
// if(fabunacci_number>0){
// let temp1=0
// let temp2=1
// let sum;
// for(let i=0; i<fabunacci_number; i++){
//     console.log(temp1);
//     sum = temp1+temp2;
//     temp1 = temp2;
//     temp2 = sum;
// }
// }
// else{
//     console.log(-1);
// }