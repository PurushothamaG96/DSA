let fs = require("fs");
let data = fs.readFileSync("d:/text.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
/*Rating Contest
A programming competition site regularly holds programming contests at different levels.
The first level contest is called ABC, which is open for contestants with ranking less than 1200.
The contest level after the ABC is called ARC, which is open for contestants with ranking less than 2800.
The contest level after the ARC is called AGC, which is open for all contestants.
Help Ramesh in figuring out which is the next level for him given his current rank 'R'.*/

//soltion
//input from readline
//comapre with abc
//if its abc false compare with ARC
//both are false its in ABC
let rank=parseInt(readLine())
if(rank<=1200){
    console.log("ABC");
} else if(rank>=1200 && rank<=2800){
    console.log(ARC);
}else(){
    console.log(AGC);
}



