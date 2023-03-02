let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Given the age of pasanger, determine wether the passange eligible or not.
if the passanger age is more than 60 are eligible, otherwise not eligible.*/
let age = parseInt(readLine())
if (age>60){
    console.log("Eligible")
}else{console.log("Not eligible")}