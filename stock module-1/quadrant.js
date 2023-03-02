let fs = require("fs");
let data = fs.readFileSync("d:/java script/text edit.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Predict the quadrant
Given a point on a two dimensional plane, predict the quadrant to which it belongs. 
Quadrants are named as Q1, Q2, Q3 and Q4. Given a point P(x, y), quadrant of P is defined as follows.

Q1, if x > 0 and y > 0
Q2, if x < 0 and y > 0
Q3, if x < 0 and y < 0
Q4, if x > 0 and y < 0*/




let n=parseInt(readLine())
for(let i=0;i<n;i++){
    let array=readLine().split(" ")
    let x=parseInt(array[0])
    let y=parseInt(array[1])
    if(x>0&&y>0){
        console.log("Q1");
    }
    else if(x<0&&y>0){
        console.log("Q2");
    }
   else if(x<0&&y<0){
        console.log("Q3");
    }
    else if(x>0&&y<0){
        console.log("Q4");
    }
}