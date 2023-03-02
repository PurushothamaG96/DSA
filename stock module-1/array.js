let fs = require("fs");
let data = fs.readFileSync("D:/java script/java script/mac.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
//find the largest number in the given list
let array=readLine().split(" ");
console.log(array)
let n=array.length;
let large=0
for(i=0;i<n;i++){
    parseInt(array[i]);
    console.log(parseInt(array[i]))
    for(j=0;j<n;j++);
{
    if((parseInt(array[i]))>(parseInt(array[j])))
    {
        large=parseInt(array[i]);
    
}
else{
    large=parseInt(array[j]);
}}}
console.log(large)
