let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*modulus opertor= three digit number shuold be multiple each other example 
input
153= 1*5*3
output
15*/
let a=parseInt(readLine())//get input
let a1=parseInt(a/100)//parseInt help to avoid decimal 153/100 is a1=1
let a2=a%100//153%100 answer is a2= 53
let a3=parseInt(a2/10)//53/10 qnswer is 5.3 nead attach parseInt answer will became a3=5
let a4=a2%10// 53%10 the answer will became a4=3
let total = a1*a3*a4
console.log(total)