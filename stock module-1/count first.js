let fs = require("fs");
let data = fs.readFileSync("d:/java script/text edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let n=parseInt(readLine())
const array=[]
for (i=0;i<n;i++)
{
    let temp=parseInt(readLine())
    array.push(temp)
    console.log(array)
}
count=1
for (i=1;i<n;i++)
{
    if (array[0]===array[i])
    {
        count+=1;

    }
}
console.log(count)